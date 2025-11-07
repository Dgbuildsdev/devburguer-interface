import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { ProductImage, SelectStatus } from './styles';
import { orderStatusOptions } from './orderStatus';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

export function Row({row, setOrders, orders}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function newStatusOrder(id, status) {
     try {
       setLoading(true);
       await api.put(`/orders/${id}`, {status: status});
       
       // Atualiza o estado local dos pedidos
       const newOrders = orders.map(order => {
         if (order._id === id) {
           return { ...order, status: status };
         }
         return order;
       });
       
       setOrders(newOrders);
       toast.success('Status do pedido atualizado com sucesso!');
       
     } catch (error) {
       console.error('Erro ao atualizar status do pedido:', error);
       toast.error('Erro ao atualizar status do pedido');
     }
      finally {
       setLoading(false);
     }
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell >{row.name}</TableCell>
        <TableCell >{formatDate(row.date)}</TableCell>
        <TableCell >
          <SelectStatus options={orderStatusOptions.filter(status => status.id !== 0)} 
          placeholder="Selecione o status"
          defaultValue={orderStatusOptions.find(status => status.value === row.status || null)}
          onChange={status => newStatusOrder(row.orderId, status.value)}
          isLoading={loading}
          menuPortalTarget={document.body}  
          />
        </TableCell>
      </TableRow>
      <TableRow key={`${row.orderId}-details`}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Imagem do Produto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product, index) => (
                    <TableRow key={`${product.id}-${index}`}>
                      <TableCell component="th" scope="row">
                        {product.quantity}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell >
                        <ProductImage src={product.url} alt={product.name} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};