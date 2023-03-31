import styled from 'styled-components';
import {darken, lighten} from 'polished';

export const Container = styled.form`

h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom:2rem;

    }
    input {
        width:100%;
        padding: 0 1.25rem;
        height: 3rem;
        border-radius:0.25rem;
        border: 1px solid #d7d7d7;
        background:#e7e9ee ;

        &+input {
            margin-top: 1rem ;
        }
    }

    &::placeholder {
        color: var(--text-body);
    }

    

    button[type="submit"]{
        width:100%;
        padding: 0 1.25rem;
        height: 3rem;
        background: #2ecc71;
        color: #fff;
        border-radius:0.25rem ;
        border:0;
        font-size: 1rem;
        margin-top:1.5rem;
        font-weight:600;
        transition: filter 0.2s ;

        &:hover {
            filter: brightness(0.9);
        }
    }

    strong {
        display: block;
        font-size: 0.85rem;
        color: var(--text-body) ;
        font-weight: 500 ;
        margin-top: 1rem;
    }
`;

export const OptionsBank = styled.div`
    display: flex;
    flex-wrap: wrap ;
    margin-top: 1rem ;

    .active {
        background: #4834d4;
        color: #fff ;
    }

`;


export const ButtonTagBank = styled.button`
    margin: 0.25rem 0.25rem;
    border:0 ;
    font-size: 0.85rem ;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem ;
    background: #e7e9ee;
    color:#000 ;
    font-weight:500 ;


    &:hover {
        filter: brightness(0.9);
    }

    
`;