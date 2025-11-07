import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.standardTheme.black};

    img {
        width: 60%;
        margin: 40px 0;
    }
    
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    text-decoration: none;
    color: ${(props) => props.theme.standardTheme.white};
    font-weight: 500;
    font-size: 18px;
    background-color: ${(props) => props.$isActive ? props.theme.standardTheme.darkPurple : 'transparent'};


    &:hover {
        background-color: ${(props) => props.theme.standardTheme.purple};
    } 


`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;

    span{
        color: ${(props) => props.theme.standardTheme.red};
    }
`;

