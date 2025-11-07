import { ListIcon, ListPlusIcon, ReceiptIcon } from "@phosphor-icons/react";



export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        icon: <ReceiptIcon />,
        path: '/admin/pedidos'
    },
    {
        id: 2,
        label: 'Produtos',
        icon: <ListIcon />,
        path: '/admin/produtos'
    },
    {
        id: 3,
        label: 'Adicionar Produto',
        icon: <ListPlusIcon />,
        path: '/admin/novo-produto'
    }
];