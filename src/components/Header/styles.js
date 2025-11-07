import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    background-color: ${(props) => props.theme.standardTheme.mainBlack};
    width: 100%;
    height: 72px;
    padding: 0 56px;
`;
export const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

width: 100%;
max-width: 1280px;
margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;  

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
    }
    hr {
        width: 1px;
        height: 24px;
        border: none;
        background-color: ${props => props.theme.standardTheme.purple};
        margin: 0 16px;

    }
`;

export const HeaderLink = styled(Link)`
    color: ${(props) => (props.$isActive ? (props) => props.theme.standardTheme.purple : props.theme.standardTheme.white)};
    border-bottom: ${(props) => (props.$isActive ? `2px solid ${props.theme.standardTheme.purple}` : 'none')};
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    transition: color 200ms;


    &:hover {
        text-decoration: underline;
        color: ${props => props.theme.standardTheme.purple};

    }
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 14px;

    p {
        color: ${props => props.theme.standardTheme.white};
        line-height: 90%;
        font-weight: 400;

        span {
            font-weight: bold;
            color: ${props => props.theme.standardTheme.purple};
        }
    }
    `;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
        
`;

export const Logout = styled.button`
    color: ${props => props.theme.standardTheme.red};
    text-decoration: none;
    font-weight: bold;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: color cubic-bezier(0.55, 0.055, 0.675, 0.19);


    &:hover {
        color: ${props => props.theme.standardTheme.darkRed};
        background-color: transparent;
        font-weight: 400;
        
    }


`;

