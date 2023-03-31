import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --background: #eeeeee;
        --text-body: #969cb3;
        --background-dark: #d3d3d3;
        --white: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background-dark);//
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0 ;
        left: 0;
        right:0 ;
        bottom:0 ;
        
        display: flex;
        align-items: center;
        justify-content: center ;
    }
    .react-modal-content {
        width: 100% ;
        max-width: 480px;
        background:var(--background);
        padding: 3rem;
        position:relative;
        border-radius:0.24rem ;
    }

    .react-modal-close {
        
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: transparent ;
        border: 0 ;
        transition: filter 0.2s ;

        &:hover {
            filter: opacity(0.7) ;
        }
        
        img {
            width: 16px;
      }
    
    }   
`;