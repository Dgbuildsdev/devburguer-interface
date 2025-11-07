import styled, {keyframes} from 'styled-components';
import BannerHamburger from '../../assets/banner-hamburger.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

     background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url('${Background}');
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerHamburger}') no-repeat;
    background-position: center;
    background-color: #1f1f1f; 
    background-size: cover;    

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 48px;
        line-height: 56px;
        color: #fff;
        position: absolute;

        right: 20%;
        top: 30%;
    }

    span{
        display: block;
        color: #fff;
        font-size: 16px;
        line-height: 24px;
        width: 300px;
        position: absolute;
        right: 10%;
        top: 65%;

    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.$isActiveCategory ? '#ff6600' : '#9758a6'};
    padding-bottom: 5px;
    line-height: 20px; 
    border: none;
    border-bottom: ${props => props.$isActiveCategory && '3px solid #9758a6'};
    transition: color 0.4s;

     &:hover {
        color: #ff6600;
    }


`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 60px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;

`;
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// === Animação de hover (pulse) ===
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Container para o botão + categorias
export const CategoryHeader = styled.div`
position: relative;       // necessário para o BackButton ficar relativo a este container
  display: flex;
  justify-content: center;  // mantém o menu centralizado
  margin-bottom: 10px;
`;

// Botão de voltar já animado
export const BackButton = styled.button`
   position: absolute;  // posicionamento absoluto
  left: 5px;             // canto esquerdo
  top: 40%;            // centralizado verticalmente no menu
  transform: translateY(-50%); // ajuste vertical exato
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #9758a6;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  animation: ${slideIn} 0.5s ease forwards;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
    animation: ${pulse} 0.6s infinite;
  }
`;
