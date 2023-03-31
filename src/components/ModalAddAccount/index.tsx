import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import CloseButton from '../../assets/close.png';
import { api } from '../../service/api';
import { useAccount } from '../hooks/useAccount';
import { ButtonTagBank, Container, OptionsBank } from "./style";

Modal.setAppElement('#root');

interface ModalAddAcccountProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface Ibank {
    id: number;
    name: string;
}

interface IoptionsBank {
    id: number;
    name: string;
}

export function ModalAddAcccount({isOpen, onRequestClose}:ModalAddAcccountProps){
    
    const [nameAccount, setNameAccount] = useState('');
    const [amountAccount, setAmountAccount] = useState(0);
    const [optionsBank, setOptionsBank] = useState<IoptionsBank>({} as IoptionsBank);
    const [active, setActive] = useState('active');

    const [bank, setBank] = useState<Ibank[]>([]);

    const {handleNewCreateAccount} = useAccount();

    useEffect(()=>{
        api.get('bank').then((response)=> setBank(response.data.banks)
        )
    },[])

    async function handleCreateAccount(event: FormEvent){
        event.preventDefault();

        await handleNewCreateAccount({nameAccount, amountAccount ,optionsBank})


       
        setNameAccount('');
        setAmountAccount(0);
        setActive('');  
        onRequestClose();
        
    }

    return(
        
            <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <Container onSubmit={handleCreateAccount}>
                    <h2>Criar Nova Conta</h2>

                    <button type='button' onClick={onRequestClose} className="react-modal-close">
                        <img src={CloseButton} alt="closeButton" />
                    </button>

                    <input 
                        type="text" 
                        placeholder='Nome da Conta'
                        value={nameAccount}
                        onChange={(e)=> setNameAccount(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder='Saldo Inicial'
                        value={amountAccount}
                        onChange={(e)=> setAmountAccount(Number(e.target.value))}
                    />

                    <strong>Opções de Banco: </strong>

                    <OptionsBank>
                        {
                            bank.map(list => (
                                <ButtonTagBank 
                                    type='button'
                                    key={list.id}
                                    onClick={() => {
                                        setOptionsBank({
                                            id: list.id,
                                            name: list.name
                                        })
                                        setActive('active')
                                    }}
                                    className={optionsBank.name === list.name ? active : ''}
                                >     
                                    {list.name}
                                </ButtonTagBank>
                            ))
                            
                            
                        }
                    </OptionsBank>
                                       

                    <button type='submit'>Criar Conta</button>          
                </Container>
            </Modal>     
    );
}