import PropTypes from 'prop-types';
import { CardImage, Container, ProductDetails } from './styles';
import { CartButton } from '../CartButton';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { toast } from 'react-toastify';

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  const handleAddToCart = () => {
    putProductInCart(product);

    toast.success(
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img
          src={product.url}
          alt={product.name}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '5px',
            objectFit: 'cover',
          }}
        />
        <span>
          <strong>{product.name}</strong> foi adicionado ao carrinho! 🛒
        </span>
      </div>,
      {
        icon: false,
        position: 'bottom-right',
      }
    );
  };

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <ProductDetails>
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <strong>{formatPrice(product.price)}</strong>
      </ProductDetails>
      <CartButton onClick={handleAddToCart} />
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
