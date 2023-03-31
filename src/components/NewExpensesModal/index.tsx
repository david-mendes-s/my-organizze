import Modal from 'react-modal';
import CloseButton from '../../assets/close.png';
import {OptionsCategory} from './style';
import {Container, OptionsBank} from '../ModalAddAccount/style';

Modal.setAppElement('#root');

interface NewExpensesModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewExpensesModal({isOpen, onRequestClose }:NewExpensesModalProps){
    return(
        <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
            <Container>
                <h2>Adicionar Despesas</h2>

                <button type='button' onClick={onRequestClose} className="react-modal-close">
                    <img src={CloseButton} alt="closeButton" />
                </button>

                <input type="text" placeholder='Título'/>
                <input type="number" placeholder='R$ 0,00'/>
              


                <strong>Opções de Banco: </strong>

                <OptionsBank>
                    <button>
                        NuBank
                    </button>
                    <button>
                        Bradesco
                    </button>
                    <button>
                        Itaú 
                    </button>
                    <button>
                        Santander
                    </button>
                    <button>
                        Banco do Brasil
                    </button>
                    <button>
                        Outro
                    </button>

                </OptionsBank>

                <strong>Categoria da Transação: </strong>

                <OptionsCategory>
                    <button>
                        Lazer
                    </button>
                    <button>
                        Alimentação
                    </button>
                    <button>
                        Vendas 
                    </button>
                    <button>
                        Saúde
                    </button>
                    <button>
                        Salário
                    </button>
                    <button>
                        Investimentos
                    </button>

                </OptionsCategory>

                <button type='submit'>Adicionar Despesas</button>          
            </Container>
        </Modal>     
    );
}