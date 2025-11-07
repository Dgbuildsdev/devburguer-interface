import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { FloatingCartButton } from '../../components/FloatingCartButton/FloatingCartButton';

export function UserLayout() {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
            <FloatingCartButton />
        </>
    );
};


