import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;        
    }

       .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }
    .react-multiple-carousel__arrow--right {
        top: 10px;
    }

        padding-left: 35px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${props => props.theme.standardTheme.purple};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;           
        width: 56px;
        height: 4px;
        background-color: ${props => props.theme.standardTheme.purple};
        transform: translateX(-50%);
        left: 50%;
        }
`;

export const CarouselItems = styled.div`
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 150px;
  padding: 10px;
`;


export const CategoryButton = styled(Link)`
color: ${props => props.theme.standardTheme.white};
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: 500;
    margin-top: 50px;
    text-decoration: none;

    &:hover {
        background-color: ${props => props.theme.standardTheme.purple};
    }


    `;