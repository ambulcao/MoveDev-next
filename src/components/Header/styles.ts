import styled from 'styled-components';

export const Container = styled.div`
    height: 100px;
    background: ${props => props.theme.color.primary};
    background-image: url('https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-tecnica-pomodoro-um-metodo-gestao-tempo-5b4e0f6051f44.jpg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    border-radius: 20px;
    opacity: 0.5;
`;