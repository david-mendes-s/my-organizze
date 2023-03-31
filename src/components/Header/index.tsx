
import { Container, FinancialView, ListCard, Content, AddAccount } from "./style";
import ArrowUp from '../../assets/arrow-up.png'; 
import Arrowdown from '../../assets/arrow-down.png'; 
import Money from '../../assets/money.png'; 
import { useEffect, useRef, useState } from "react";
import { useAccount } from "../hooks/useAccount";
import { useTransaction } from "../hooks/useTransactions";

interface HeaderProps {
    openModal: ()=> void;
}

export function Header({openModal}:HeaderProps){
    const carrosel = useRef(null);
    const [width, setWidth] = useState(0);

    const {accounts} = useAccount();
    const {transactions, sumTransactions} = useTransaction();

    useEffect(()=>{
        setWidth(carrosel.current?.scrollWidth - (carrosel.current?.offsetWidth));
        
    },[accounts]);

    const amount = accounts.reduce((acc, cur) => {
        acc = acc + cur.amountAccount;
        return acc;
    }, 0);

    const entradas = transactions.reduce((acc, curr) => {
        if(curr.isType === 'Entrada'){
            acc += curr.amountTransaction;
        }
        return acc;
    },0);

    const saidas = transactions.reduce((acc, curr) => {
        if(curr.isType === 'Saída'){
            acc += curr.amountTransaction;
        }
        return acc;
    },0);


    /* function sumTransactions(accountId:number) {
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
      } */
      

    return(
        <Content>
            <FinancialView>
                <strong>Seu balaço total</strong>
                <h2>{new Intl.NumberFormat('pt-Br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(amount + entradas - saidas)}</h2>

                <div>
                    <div>
                        <small>{new Intl.NumberFormat('pt-Br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(entradas)}</small>
                        <img src={ArrowUp} alt="Entradas" />
                        <p>Entradas</p>
                    </div>

                    <div>
                        
                        <small>
                        {new Intl.NumberFormat('pt-Br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(saidas)}
                        </small>
                        <img src={Arrowdown} alt="Saídas" />
                        <p>Saídas</p>
                    </div>
                </div>
            </FinancialView>
            
        <Container ref={carrosel} whileTap={{cursor:"grabbing"}}>
            
                <ListCard drag='x' dragConstraints={{right: 0, left: -width}}>
                    
                {accounts.map(card => (
                    <div key={card.id}>
                        <strong>Balanço Geral</strong>
                        <h3>
                        {new Intl.NumberFormat('pt-Br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(card.amountAccount + sumTransactions(card.id))}</h3>
                        <p>{card.nameAccount} - {card.optionsBank.name}</p>
                    
                    </div> 
                ))}
                                      
                </ListCard>
            
        </Container>
        <AddAccount>
            <img src={Money} alt="" />
            <button type="button"
                onClick={openModal}
            >Add. Conta</button>
        </AddAccount>
     </Content>
    );
}