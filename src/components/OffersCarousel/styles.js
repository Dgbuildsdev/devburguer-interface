import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;        
    }
        overflow-x: hidden;

     .react-multi-carousel-list {  
     overflow: visible;
     } 

     .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }
    .react-multiple-carousel__arrow--right {
        top: 10px;
    }

        padding-left: 35px;
        padding-bottom: 70px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${props => props.theme.standardTheme.green};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;           
        width: 56px;
        height: 4px;
        background-color: ${props => props.theme.standardTheme.green};
        transform: translateX(-50%);
        left: 50%;
        }
`;

