import Modal from 'react-modal';
import CloseButton from '../../assets/close.png';
import {ButtonTagBank, OptionsCategory} from './style';
import {Container, OptionsBank} from '../ModalAddAccount/style';
import { FormEvent, useEffect, useState } from 'react';
import { api } from '../../service/api';
import { useAccount } from '../hooks/useAccount';
import { useTransaction } from '../hooks/useTransactions';

Modal.setAppElement('#root');

interface NewDepositModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    isType: string;
}

interface Icategories {
    id: number;
    name: string;
}

interface IoptionsBank {
    id: number;
    name: string;
}

export function NewDepositModal({isOpen, onRequestClose, isType }:NewDepositModalProps){

    const [category, setCategory] = useState<Icategories[]>([]);
    
    const [nameTransaction, setNameTransaction] = useState('');
    const [amountTransaction, setAmountTransaction] = useState(0);
    const [optionsBank, setOptionsBank] = useState<IoptionsBank>({} as IoptionsBank);
    const [optionsCategories, setOptionsCategories] = useState<Icategories>({} as Icategories);
    
    const [activeBank, setActiveBank] = useState('active');
    const [activeCategory, setActiveCategory] = useState('active');

    const {accounts} = useAccount();
    const {createTransactions} = useTransaction();

    useEffect(()=>{
        api.get('category').then((response)=> setCategory(response.data.categories)
    )},[])

    function handleNewTransactions(event:FormEvent){
        event.preventDefault();

        console.log(isType);

        createTransactions ({
            nameTransaction,
            amountTransaction,
            isType,
            optionsBank,
            optionsCategories,
        })

        
        setAmountTransaction(0);
        setNameTransaction('');
        setActiveBank('');
        setActiveCategory('');
       
        onRequestClose();
    }

    return(
        <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
            <Container onSubmit={handleNewTransactions}>
                <h2>Adicionar Transação</h2>

                <button type='button' onClick={onRequestClose} className="react-modal-close">
                    <img src={CloseButton} alt="closeButton" />
                </button>

                <input 
                    type="text" 
                    placeholder='Título'
                    value={nameTransaction}
                    onChange={(e) => setNameTransaction(e.target.value)}
                />

                <input 
                    type="number" 
                    placeholder='R$ 0,00'
                    value={amountTransaction}
                    onChange={(e)=> setAmountTransaction(Number(e.target.value))}
                />
              
                <strong>Opções de Banco: </strong>

                <OptionsBank>
                    {accounts.map(banks => (
                        <ButtonTagBank 
                            type='button'
                            key={banks.id}
                            onClick={() => {
                                setOptionsBank({
                                   id: banks.id,
                                   name: banks.nameAccount
                                })
                                setActiveBank('active')
                            }}
                            className={optionsBank.name === banks.nameAccount ? activeBank : ''}
                        >
                            {banks.optionsBank.name}      
                        </ButtonTagBank>
                    ))}
                    
                    
                </OptionsBank>

                <strong>Categoria da Transação: </strong>

                <OptionsCategory>

                    {category.map(list => (
                        <button 
                            type='button' 
                            key={list.id}
                            onClick={()=> {
                                setOptionsCategories({
                                    id: list.id,
                                    name: list.name
                                })

                                setActiveCategory('active');
                            }}
                            className={optionsCategories.id === 
                                        list.id ? activeCategory : ''}
                        >
                            {list.name}
                        </button>
                        )
                    )}
                    
                    

                </OptionsCategory>

                <button type='submit'>Adicionar Transação</button>          
            </Container>
        </Modal>     
    );
}