import styled from "styled-components";

export const Container = styled.div``;


export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
    background-color: ${props => props.theme.standardTheme.lightGray};
`;



export const EditButton = styled.button`
    border: none;
    background-color: ${props => props.theme.standardTheme.darkWhite};
    height: 32px;
    width: 32px;
    border-radius: 8px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        height: 18px;
        width: 18px;
    }

    &:hover {
        background-color: ${props => props.theme.standardTheme.purple};

        svg {
            fill: ${props => props.theme.standardTheme.white};
        }
    }



`;

