import styled from 'styled-components';
import {lighten} from 'polished';

export const Container = styled.div`
    background: #fff;
    padding: 2rem ;
    border-radius: 0.5rem ;
    display: flex;
    flex-direction:  column;

    width: 100%;
    max-width: 550px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    

    
        div {
            display: inherit;
            justify-content: space-between ;
        
            h3 {
                font-size: 1.3rem;
                color: var(--text-body);
                font-weight: 400;
            }

            .withdraw {
                background:  #d63031;
            }

            
        }

    
    
    table {
        width: 100%;
        margin-top: 0.5rem ;
        border-spacing: 0 1rem;
        
        

        th {
            color: var(--text-body);
            font-weight: 400 ;
            text-align: left ;
            line-height: 1.5rem ;

            
        }

        td {
            
            font-weight: 400 ;
            border-right: 16px solid transparent ;

            &:nth-child(2){
                text-align: center;
                p {
                    font-size: 0.85rem ;
                    padding: 0.15rem ;
                    border-radius: 0.25rem ;
                    
                    font-weight:500;

                    &.alimentação {
                        background: ${lighten(0.40, '#f1c40f')};
                        color:#f1c40f;
                    }
                    &.mercado {
                        background: ${lighten(0.40, '#9b59b6')};
                        color:#9b59b6 ;
                    }
                    &.assinaturas {
                        background: ${lighten(0.40, '#4834d4')};
                        color:#4834d4 ;
                    }
                    &.educação{
                        background: ${lighten(0.45, '#ff3f34')};
                        color:#ff3f34 ;
                    }
                    &.lazer {
                        background: ${lighten(0.45, '#20bf6b')};
                        color:#20bf6b ;
                        
                    }
                    &.casa{
                        background: ${lighten(0.48, '#B33771')};
                        color:#B33771 ;
                        
                    }
                    &.mercado {
                        background: ${lighten(0.40, '#F97F51')};
                        color:#F97F51 ;
                        
                    }
                    &.transporte{
                        background: ${lighten(0.40, '#2d98da')};
                        color:#2d98da ;
                    }
                    &.salário {
                        background: ${lighten(0.40, '#4cd137')};
                        color: #4cd137; 
                    }
                    &.investimentos{
                        background: ${lighten(0.34, '#FC427B')};
                        color: #FC427B;
                        
                    }
                }
            }

            &:last-child{
                border-right: 1px solid transparent ; 
                text-align: center;
                    p {
                        font-size: 0.85rem ;
                        padding: 0.15rem ;
                        border-radius: 0.25rem ;

                        font-weight:500 ;  

                        &.entrada{
                        background: ${lighten(0.45, '#2ecc71')};
                        color:#2ecc71 ;
                        }  
                    
                        &.saída{
                            background: ${lighten(0.45, '#d63031')};
                            color:#d63031;
                        } 
                    }
            }

            div{
                display: flex ;
                justify-content: start ;
                
                img{
                    width: 35px;
                    height: 40px ;
                    margin-right: 12px;
                }

            div {
                display: flex ;
                flex-direction:column ;

                strong {
                    font-size: 0.9rem ;
                }

                small {
                    color: var(--text-body);
                    font-size: 0.75rem;
                }
            }
        }
            
        }
    }
`;

export const ButtonNewTransactions = styled.button`
   
    display: flex ;
    align-items: center ;
    justify-content:center;

    width: 30px ;
    height: 30px ;
    border: 0;
    font-size: 1rem;
    font-weight: 600 ;
    padding: 0.5rem ;
    border-radius: 0.25rem ;
    background: #2ecc71 ;
    color: #fff;

    &:hover {
    filter: brightness(0.9) ;
    }

    &:first-child {
    margin-right: 10px;
    }

`;