import Cart from '../../assets/cart-icon.svg';
import { ContainerButton } from './styles';

export function CartButton({ onClick }) {
  return (
    <ContainerButton onClick={onClick}>
      <img src={Cart} alt="Cart Icon" />
    </ContainerButton>
  );
}