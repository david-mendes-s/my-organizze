import { useState } from "react";
import { Grafics } from "../Grafics";
import { Header } from "../Header";
import { ModalAddAcccount } from "../ModalAddAccount";
import { NewDepositModal } from "../NewDepositModal";
import { NewExpensesModal } from "../NewExpensesModal";
import { Transactions } from "../Transactions";
import { Container, Main } from "./styled";

export function Dashboard(){

    const [isModalCreateAccount, setIsModalCreateAccount] = useState(false);

    const [isModalNewDepositModal, setIsModalNewDepositModal] = useState(false);

    const [isModalNewExpensesModal, setIsModalNewExpensesModal] = useState(false);

    const [isdeposit, setIsdeposit] = useState('Saída');

    function handleIsDeposit(){
        setIsdeposit('Entrada');
    }
  
    function handleIsExpenses(){
        setIsdeposit('Saída');
    }


    function handleCloseModalAccount(){
        setIsModalCreateAccount(false);
    }
  
    function handleOpeanNewModalAccount(){
        setIsModalCreateAccount(true);
    }

    function handleCloseNewDepositModal(){
        setIsModalNewDepositModal(false);
    }
  
    function handleOpeanNewDepositModal(){
        setIsModalNewDepositModal(true);
    }

    console.log(isdeposit)

    return(
        <Container>
            <Header openModal={handleOpeanNewModalAccount}/>
            <Main>
                <Transactions 
                    openModalDeposit={handleOpeanNewDepositModal}
                    buttonIsDeposit={handleIsDeposit}
                    buttonIsExpenses={handleIsExpenses}
                />
                <Grafics />
            </Main>

            <ModalAddAcccount  
                isOpen={isModalCreateAccount}
                onRequestClose={handleCloseModalAccount}
                
            />

            <NewDepositModal 
                isOpen={isModalNewDepositModal}
                onRequestClose={handleCloseNewDepositModal}
                isType={isdeposit}
            />

            
            
        </Container>
          
    );
}