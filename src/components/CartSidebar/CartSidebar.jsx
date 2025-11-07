import { X, Plus, Minus, Trash } from "lucide-react";
import styled from "styled-components";
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

export function CartSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const {
    cartProducts = [],
    increaseProduct,
    decreaseProduct,
    deleteProduct,
  } = useCart();

  const total = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleIncrement = (id) => {
    increaseProduct(id);
  };

  const handleDecrement = (id) => {
    decreaseProduct(id);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleCheckout = () => {
    onClose();
    navigate("/carrinho");
  };

  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <Sidebar $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3>Seu Carrinho</h3>
          <button type="button" onClick={onClose}>
            <X size={22} />
          </button>
        </Header>

        <Content>
          {cartProducts.length === 0 ? (
            <Empty>Carrinho vazio 😢</Empty>
          ) : (
            cartProducts.map((product) => (
              <Item key={product.id}>
                <img src={product.url || product.file} alt={product.name} />
                <div className="info">
                  <strong>{product.name}</strong>
                  <p>{formatPrice(product.price)}</p>

                  <div className="controls">
                    <button
                      type="button"
                      onClick={() => handleDecrement(product.id)}
                    >
                      <Minus size={14} />
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleIncrement(product.id)}
                    >
                      <Plus size={14} />
                    </button>
                    <button
                      type="button"
                      className="trash"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash size={14} />
                    </button>
                  </div>
                </div>
              </Item>
            ))
          )}
        </Content>

        <Footer>
          <div className="total">
            <span>Total:</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <button
            type="button"
            className="checkout"
            onClick={handleCheckout}
            disabled={cartProducts.length === 0}
          >
            Finalizar Pedido
          </button>
        </Footer>
      </Sidebar>
    </Overlay>
  );
}

/* ---------- Styled Components ---------- */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  z-index: 100;
  overflow: hidden;
`;

const Sidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 340px;
  height: 100vh;
  background: ${props => props.theme.standardTheme.white};
  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  border-bottom: 1px solid ${props => props.theme.standardTheme.lightGray};
  background: ${props => props.theme.standardTheme.white};

  h3 {
    font-size: 1.1rem;
    color: ${props => props.theme.standardTheme.purple};
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: ${props => props.theme.standardTheme.lightGray};

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.standardTheme.gray};
    border-radius: 10px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.standardTheme.lightGray};
  padding-bottom: 0.8rem;

  img {
    width: 55px;
    height: 55px;
    border-radius: 10px;
    object-fit: cover;
  }

  .info {
    flex: 1;

    strong {
      font-size: 0.95rem;
      display: block;
      margin-bottom: 0.2rem;
    }

    p {
      font-size: 0.85rem;
      color: ${props => props.theme.standardTheme.gray};
      margin-bottom: 0.4rem;
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;

      button {
        border: none;
        background: ${props => props.theme.standardTheme.purple};
        color: ${props => props.theme.standardTheme.white};
        border-radius: 6px;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.12s;

        &:hover {
          opacity: 0.8;
        }
      }

      .trash {
        background: ${props => props.theme.standardTheme.red};
      }

      span {
        font-weight: 600;
        font-size: 0.9rem;
        min-width: 22px;
        text-align: center;
      }
    }
  }
`;

const Empty = styled.p`
  text-align: center;
  color: ${props => props.theme.standardTheme.gray};
  margin-top: 2rem;
`;

const Footer = styled.div`
  flex-shrink: 0;
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.standardTheme.lightGray};
  background: ${props => props.theme.standardTheme.white};

  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    span {
      color: ${props => props.theme.standardTheme.darkGray};
    }
    strong {
      font-size: 1rem;
      color: ${props => props.theme.standardTheme.black};
    }
  }

  .checkout {
    width: 100%;
    background: ${props => props.theme.standardTheme.purple};
    color: ${props => props.theme.standardTheme.white};
    border: none;
    border-radius: 8px;
    padding: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.12s;
  }

  .checkout:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
