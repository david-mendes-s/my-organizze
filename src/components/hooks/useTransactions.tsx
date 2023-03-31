import {createContext, ReactNode, useEffect, useState, useContext} from 'react';
import { api } from '../../service/api';



interface ITransactionsProvider {
    children: ReactNode;
}

interface Itransactions {
    id: number;
    nameTransaction: string;
    amountTransaction: number;
    isType: string;
    optionsBank: {
        id: number;
        name: string;
    };
    optionsCategories: {
        id: number;
        name: string;
    };
    date: string;
}

type ItransactionsInput = Omit<Itransactions, 'id' | 'date'>

interface TransactionsContextData {
    transactions: Itransactions[];
    createTransactions: (transactions:ItransactionsInput) => Promise<void>;
    sumTransactions: (id:number)=> number;
}



const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}:ITransactionsProvider){

    const [transactions, setTransactions] = useState<Itransactions[]>([]);

    function sumTransactions(accountId:number) {
        let total = 0;
      
        // Percorre o array de transações
        for (const transaction of transactions) {
         
              // Verifica se o ID da conta bancária da transação corresponde ao ID da conta bancária fornecida
            if (transaction.optionsBank.id === accountId) {
            // Adiciona o valor da transação à soma
                if(transaction.isType === 'Entrada'){
                    total += transaction.amountTransaction;
                }else{
                    total -= transaction.amountTransaction;
                }   
            }

        }
      
        return total;
      }
      

    useEffect(()=>{
        api.get('transactions').then((response)=> setTransactions(response.data.transactions));
    }, []);
    
    async function createTransactions(transactionsInput: ItransactionsInput){
         const response = await api.post('transactions', {
            ...transactionsInput,
            date: new Date()
        })

        const { transaction } = response.data;

        console.log(transaction);

        setTransactions([
            ...transactions,
            transaction
        ])
    }
    
    return(
        <TransactionsContext.Provider value={{transactions, createTransactions, sumTransactions}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransaction(){
    const context = useContext(TransactionsContext);
    return context;
}