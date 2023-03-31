import styled from "styled-components";

export const OptionsCategory = styled.div`
    display: flex;
    flex-wrap: wrap ;
    margin-top: 1rem ;

    .active {
        background: #4834d4;
        color: #fff ;
    }

    button {
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