import styled from 'styled-components';

export const ContainerButton = styled.button`
    background-color: ${props => props.theme.standardTheme.purple};
    width: 100%;
    height: 48px;
    border: 0;
    border-radius: 8px;
    font-size: 30px;
    color: ${props => props.theme.standardTheme.white};


    &:hover {
        background-color: ${props => props.theme.standardTheme.secondDarkPurple};
    }

`;

