import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: ${props => props.theme.standardTheme.white};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 10px;
    cursor: grab;
    position: relative;
        

    div {
        width: 100%;
        height: 250px;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        

        h5 {
            font-size: 18px;
            color: ${props => props.theme.standardTheme.orange};
            line-height: 20px;
            font-weight: 700;
            margin-top: 50px;
            text-align: center;
            padding-top: 10px;

        }
        p {
            font-size: 16px;
            color: ${props => props.theme.standardTheme.gray};
            line-height: 25px;
            font-weight: 400;
            margin: 0;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        strong {
            font-size: 26px;
            color: ${props => props.theme.standardTheme.darkGray};
            font-weight: 700;
            line-height: 15px;
            /* text-align: center; */

        }
    }
`;

export const CardImage = styled.img`
    height: 120px;
    position: absolute;    
    top: -40px;
    padding-top: 10px;
    padding-bottom: 5px;
    
`;