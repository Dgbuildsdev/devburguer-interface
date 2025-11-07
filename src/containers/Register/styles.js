import styled from 'styled-components';
import BackgourndLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';
import {Link as ReactLink} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgourndLogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center; 

  img {
    width: 65%;
}
  `;
export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Background}') ;
    background-color: ${props => props.theme.standardTheme.mainBlack};

    p{
        color: ${props => props.theme.standardTheme.white};
        font-size: 16px;
        font-weight: 800;

        a{
            text-decoration: underline;
            color: ${props => props.theme.standardTheme.purple};
        }
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: ${props => props.theme.standardTheme.purple};

    span {
        color: ${props => props.theme.standardTheme.purple};
        font-family: "Road Rage", sans-serif;

    }  
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
  
`;

export const InputContainer = styled.div`  
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
        font-size: 18px;

        &:focus{
            outline: 3px solid ${props => props.theme.standardTheme.purple};
        }
    };

    label{
        font-size: 25px;
        font-weight: 600;
        color: ${props => props.theme.standardTheme.white};
    };
    span{
        color: ${props => props.theme.standardTheme.red};
        font-size: 18px;
        font-weight: 600;
        line-height: 80%;
        height: 10px;
    }
`;
export const Link = styled(ReactLink)`
    text-decoration: none;
    color: ${props => props.theme.standardTheme.white};

`;
