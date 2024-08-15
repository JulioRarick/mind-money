import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    :focus{
        outline: 0;
        box-shadow: ${(props) => props.theme['green-500']};
    }
    body{
        background-color: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-900']};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-family: "Reddit Sans", sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`;
