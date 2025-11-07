import styled from "styled-components";

export const ProductImage = styled.img`
height: 80px;
width: 80px;
border-radius: 16px;

`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        width: 28px;
        color: ${props => props.theme.standardTheme.white};
        border-radius: 16px;
        background-color: ${props => props.theme.standardTheme.purple};
        font-size: 15px;
        font-weight: bold;
        border: none;
        transition: all 0.5s;


        &:hover {
            background-color: ${props => props.theme.standardTheme.secondDarkPurple};
        }
    }
`;

export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;    
    font-weight: bold;
`;
export const TotalPrice = styled.p`
    font-weight: bold;
`;

export const TrashImage = styled.img`
height: 24px;
width: 24px;
cursor: pointer;

&:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
}
`;