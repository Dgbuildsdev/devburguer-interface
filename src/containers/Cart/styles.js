import styled from "styled-components";
import Texture from "../../assets/texture.svg";
import Background from "../../assets/background.svg";

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(
    rgba(240, 240, 240, 0.6),
    rgba(240, 240, 240, 0.6)
    ), url('${Background}');
    min-height: 100vh;
    
`;

export const Banner = styled.div`
    background: url('${Texture}') ;
    background-size: cover;
    background-color: ${props => props.theme.standardTheme.white};
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        width: 140px;        
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 12px;
    color: ${props => props.theme.standardTheme.green};
    text-align: center;
    position: relative;

    &::after {
        position: absolute;
        bottom: 0;
        transform: translateX(-50%) ;
        left: 50%;
        content: '';
        width: 56px;
        height: 4px;
        background-color: ${props => props.theme.standardTheme.green};        
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;        
    margin: 0 auto;
    gap: 25px;

`;
