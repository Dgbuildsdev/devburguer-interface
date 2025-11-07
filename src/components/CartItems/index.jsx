import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import TrashIcon from '../../assets/trash.svg';
import { ButtonGroup, EmptyCart, ProductImage, TotalPrice, TrashImage,  } from './styles';

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Descrição</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Subtotal</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>

      <Table.Body>
        {cartProducts?.length > 0 ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt={product.name} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.description}</Table.Td>
              <Table.Td> {formatPrice(product.price)}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <TotalPrice>{formatPrice(product.price * product.quantity)}</TotalPrice>
              </Table.Td>
              <Table.Td>
                <TrashImage src={TrashIcon} alt="Remover item" onClick={() => deleteProduct(product.id)} />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan={6}>
              <EmptyCart>Seu carrinho está vazio</EmptyCart>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}
