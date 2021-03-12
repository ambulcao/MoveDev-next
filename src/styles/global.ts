import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.color.background};
        background-image: url('https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80');        background-repeat: no-repeat;
        background-size: cover;
        font-size: 14px;
        color: ${props => props.theme.color.text};
        font: 600 2rem "Inter", sans-serif;
    }
`;