import { Route, Routes } from "react-router-dom";
import { Login, Cart, Home, Menu, Register, Checkout, CompletePayment, Orders, NewProduct, EditProduct, Products } from "../containers";
import { FloatingCartButton } from "../components/FloatingCartButton/FloatingCartButton";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";



export function Router() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<><Home /><FloatingCartButton /></>} />
                <Route path="/cardapio" element={<><Menu /><FloatingCartButton /></>} />
                <Route path="/carrinho" element={<Cart />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/novo-produto" element={<NewProduct />} />
                <Route path="/admin/editar-produto" element={<EditProduct />} />
                <Route path="/admin/produtos" element={<Products />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/complete" element={<CompletePayment />} />

        </Routes>
    );
};



