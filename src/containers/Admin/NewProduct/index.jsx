import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ImageIcon } from "@phosphor-icons/react"
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage, ContainerCheckbox } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const schema = yup
    .object({
        name: yup.string().required('Nome do produto é obrigatório'),
        price: yup.number().positive().required('Preço do produto é obrigatório').typeError('Preço do produto é obrigatório'),
        description: yup.string().required('Descrição do produto é obrigatória'),
        category: yup.object().required('Categoria é obrigatória'),
        offer: yup.boolean().required('Campo de oferta é obrigatório'),
        file: yup.mixed().test('required', 'Imagem do produto é obrigatória', value => {
            return value && value.length > 0;
        }).test('fileSize', 'A imagem é muito grande', value => {
            return value && value.length > 0 && value[0].size <= 5000000;
        }).test('type', 'Formato de imagem inválido, Use PNG ou JPEG', value => {
            return value && value.length > 0 && ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type);
        })

    })
    .required()


export function NewProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }
        loadCategories();
    }, [])


    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        try {
            const productFormData = new FormData();
            productFormData.append('name', data.name);
            productFormData.append('price', data.price);
            productFormData.append('description', data.description);
            productFormData.append('category_id', data.category.id);
            productFormData.append('offer', data.offer);
            productFormData.append('file', data.file[0]);

            await toast.promise(
                api.post('/products', productFormData),
                {
                    pending: 'Cadastrando produto...',
                    success: 'Produto cadastrado com sucesso!',
                    error: 'Erro ao cadastrar produto, tente novamente.'
                });



        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            toast.error('Erro ao cadastrar produto. Tente novamente.');
        }
        setTimeout(() => {
            navigate('/admin/produtos');
        }, 2000);

    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome do Produto</Label>
                    <Input type="text" {...register("name")} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço do Produto</Label>
                    <Input type="number" {...register("price")} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup>
                    <Label>Descrição do Produto</Label>
                    <Input type="text" {...register("description")} />
                    <ErrorMessage>{errors.description?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup>
                    <LabelUpload>
                        <ImageIcon />
                        <input
                            type="file"
                            {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value?.target?.files[0]?.name);
                                register("file").onChange(value);
                            }}
                        />
                        {fileName || "Imagem do Produto"}
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={category => category.name}
                                getOptionValue={category => category.id}
                                placeholder="Selecione a categoria"
                                menuPortalTarget={document.body}

                            />
                        )}
                    />
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <ContainerCheckbox>
                        <input type="checkbox" {...register("offer")}/>
                        <Label>Produto em Oferta ?</Label>
                    </ContainerCheckbox>
                </InputGroup>

                <SubmitButton type="submit">Cadastrar Produto</SubmitButton>
            </Form>
        </Container>
    );
}