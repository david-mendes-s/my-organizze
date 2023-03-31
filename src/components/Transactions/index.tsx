import {ButtonNewTransactions, Container} from './style';
import Wallet from '../../assets/wallet.png';
import { useTransaction } from '../hooks/useTransactions';

interface TransactionsProps {
    openModalDeposit: ()=>void;
    buttonIsDeposit: () => void;
    buttonIsExpenses: () => void;
}

export function Transactions({openModalDeposit, buttonIsExpenses, buttonIsDeposit}:TransactionsProps){
    
    function Entradas(){
        buttonIsDeposit();
        openModalDeposit();
       
    }
    
    function Saidas(){
        buttonIsExpenses();
        openModalDeposit();
    }

    const {transactions} = useTransaction();

    return(
        <Container>
            <div>
                <h3>Transações do Mês</h3>
                <div>
                    <ButtonNewTransactions 
                        type='button' 
                        onClick={Entradas}
                        
                        >+</ButtonNewTransactions>
                    <ButtonNewTransactions
                     className='withdraw' 
                     type='button' 
                     onClick={Saidas}>-</ButtonNewTransactions>
                </div>
                
            </div>
           
            <table >
                <thead>
                    <tr>
                       
                    </tr>
                </thead>
                <tbody> 
                        {
                            transactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td>
                                        <div>
                                            <img src={Wallet} alt="wallet" />

                                            <div>
                                                <strong>{transaction.nameTransaction}</strong>
                                                <small>{new Intl.DateTimeFormat('pt-Br').format(
                                                            new Date(transaction.date)
                                                )}</small>
                                            </div>
                                        </div>                           
                                    </td>
                                    <td>
                                        <p className={transaction.optionsCategories.name.toLowerCase()}>
                                            {transaction.optionsCategories.name}
                                        </p>
                                    </td>
                                    <td>
                                        {new Intl.NumberFormat('pt-Br', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(transaction.amountTransaction)}
                                    </td>
                                    <td><p className={transaction.isType.toLowerCase()}>{transaction.isType}</p></td>
                                </tr>
                            ))
                        }
                    
                </tbody>
            </table>
        </Container>
    );
}