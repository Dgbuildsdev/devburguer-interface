import { navLinks } from "./navLinks";
import Logo from '../../assets/logo.svg'
import { SignOutIcon } from "@phosphor-icons/react";
import { Container, Footer, NavLinkContainer, NavLink } from "./styles";
import { useUser } from "../../hooks/UserContext";
import { useResolvedPath } from "react-router-dom";



export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    
    return (
        <Container>
            <img src={Logo} alt="DevBurguer Logo" />
            <NavLinkContainer>
                {navLinks.map(link => (
                    <NavLink to={link.path} key={link.id} $isActive={pathname === link.path}>
                        {link.icon}
                        <span>
                            {link.label}
                        </span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <SignOutIcon />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    );
}