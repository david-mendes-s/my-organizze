import styled from "styled-components";
import {motion} from 'framer-motion';

import Card from '../../assets/Card.png';

export const Content = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: center ;

    background: #fff;
    padding: 2rem;
    border-radius: 0.5rem ;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    

    strong {
        color: var(--text-body);
        font-weight: 400;
    }

    h2 {
       margin: 1rem 0 ;
    }

`;



export const Container = styled(motion.div)`
    
    max-width:100%;
    overflow: hidden;


    margin:0 2rem;
    background: #fff;
    border-radius: 0.25rem ;
    

    display: flex ;
    align-items: center ;
    flex: 2;
    //justify-content: center ;

`;



export const FinancialView = styled.div`
    width: 190px ;


    div {
        display: grid ;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem ;
        
        div{

            p{
                font-size: 0.8rem;
                color: var(--text-body) ;
            }
            small {
                display: inline-block;
                font-size: 0.8rem;
            }
            img {
                width: 20px;
            }
        }
    }

`;


export const ListCard = styled(motion.div)`    
        background: #fff ;
        display: flex;
        gap: 1.5rem;
        color: #fff ;
        
        div{
            width: 270px;
            
            background: url(${Card});
            background-position:center ;
            height: 150px;
            border-radius: 0.75rem ;
            padding: 1rem;
            position: relative ;
         

            strong {
                font-size: 0.65rem ;
                color:#fff;
                filter: brightness(0.9) ;
            }

            h3 {
                font-size: 1.5rem ;
                /* font-family: 'Ubuntu';
                font-weight: 500 ; */
            }

            p {
                position: absolute ;
                font-size: 0.75rem ;
                bottom: 0;
                margin-bottom: 1rem ;
            }
        } 
           
`;

export const AddAccount = styled.div`
    display: flex;
    flex-direction: column ;
    
  
    
    img {
        height: 110px ;
    }

    button {
        border: 0;
        font-size: 0.8rem;
        font-weight: 600 ;
        padding: 0.5rem ;
        border-radius: 0.25rem ;
        background: #2ecc71 ;
        color: #fff;

        &:hover {
         filter: brightness(0.9) ;
        }
        
    }
    

`;