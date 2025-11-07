import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services/api";
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from "./styles";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";



export function Login() {
    const navigate = useNavigate();
    const { putUserData } = useUser();

    const schema = yup
        .object({
            email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
            password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required("A senha é obrigatória")
        })

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {
        const { data: userData } = await toast.promise(
            api.post('/sessions', {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Verificando credenciais...',
                success: {
                    render() {
                        setTimeout(() => {
                            if (userData?.admin) {
                                navigate('/admin/pedidos');
                            } else {
                                navigate('/');
                            }
                        }, 2000);
                        return 'Login realizado com sucesso!'
                    },
                },
                error: 'Erro ao fazer login. Verifique suas credenciais.'
            }
        );
        putUserData(userData);

    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Email e senha.</span>
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        {errors.password && <span>{errors.password.message}</span>}
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Nao possui conta? <Link to="/cadastro">Clique aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    );
}
