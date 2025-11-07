import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services/api";
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from "./styles";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



export function Register() {
    const navigate = useNavigate();

    const schema = yup
        .object({
            name: yup.string().required("O nome é obrigatório"),
            email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
            password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required("A senha é obrigatória"),
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem corresponder').required('Confirmação de senha é obrigatória'),
        })
        .required();

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {

        try {
            const { status } = await toast.promise(
                api.post('/users', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    admin: false,
                }),
                {
                    validateStatus: () => true,
                },

            );
            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                toast.success('Cadastro realizado com sucesso!');
            } else if (status === 409) {
                toast.error('E-mail já cadastrado. Tente outro e-mail.');
            } else {
                throw new Error();
            };

        } catch (error) {
            toast.error('Falha no Sistema! Tente novamente mais tarde.');
        };
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Title>Criar Conta</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </InputContainer>

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
                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                    </InputContainer>

                    <Button type="submit">Cadastrar</Button>
                </Form>
                <p>Já possui conta? <Link to="/login">Clique aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    );
}
