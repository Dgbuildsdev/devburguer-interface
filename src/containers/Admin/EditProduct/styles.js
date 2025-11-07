import styled from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const Form = styled.form`
    border-radius: 20px;
    background-color: ${props => props.theme.standardTheme.black};
    padding: 32px;
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 16px;

`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.label`
    color: ${props => props.theme.standardTheme.white};
    font-size: 14px;

`;

export const Input = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border: none;
    padding: 0 12px;
`;

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 2px dashed ${props => props.theme.standardTheme.white};
    border-radius: 8px;
    padding: 16px;
    display: flex;
    color: ${props => props.theme.standardTheme.white};
    margin: 20px 0px;
    justify-content: center;


    > svg {
        width: 24px;
        height: 24px;
        fill: ${props => props.theme.standardTheme.white};
        margin-right: 8px;
    }

    > input {
        display: none;
    }

`;

export const Select = styled(ReactSelect)`
    width: 100%;
    color: ${props => props.theme.standardTheme.mainBlack};
    background-color: ${props => props.theme.standardTheme.black};
    border: 1px dashed ${props => props.theme.standardTheme.white};
    border-radius: 8px;
    padding: 12px 16px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 40px;
`;
export const ErrorMessage = styled.span`
    color: ${props => props.theme.standardTheme.darkRed};
    font-size: 14px;
    line-height: 80%;
    font-weight: 500;

`;

export const ContainerCheckbox = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
    margin-top: 10px;

    input{
        cursor: pointer;
    }

`;