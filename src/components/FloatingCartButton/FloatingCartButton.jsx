import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { CartSidebar } from "../CartSidebar/CartSidebar";

export function FloatingCartButton() {
  const { cartProducts } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const total = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Button onClick={() => setIsSidebarOpen(true)}>
        <ShoppingCart size={22} />
        <span>{formatPrice(total)}</span>
      </Button>

      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}

/* ---------- Styled Components ---------- */

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 25px;
  background-color: ${props => props.theme.standardTheme.purple};
  color: ${props => props.theme.standardTheme.white};
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 90;

  &:hover {
    background-color: ${props => props.theme.standardTheme.purple};
    transform: scale(1.05);
  }

  svg {
    margin-right: 4px;
  }

  span {
    font-size: 0.95rem;
  }
`;
