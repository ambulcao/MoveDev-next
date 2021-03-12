import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

const Header: React.FC = () => {
    const { color } = useContext(ThemeContext);

    return (
        <Container>
            Pomodoro Developer

            <Switch 
                onChange={() =>{}}
                checked={false}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.2, color.secundary)}
                onColor={color.primary}
            />
        </Container>
    );
};

export default Header;