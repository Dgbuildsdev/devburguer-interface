import styled from 'styled-components';

export const Container = styled.footer`
    height: 30px;
    background-color: ${props => props.theme.standardTheme.darkPurple};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;



    p{
        color: ${props => props.theme.standardTheme.white};
        line-height: light;
        font-size: 14px;
    }


`;