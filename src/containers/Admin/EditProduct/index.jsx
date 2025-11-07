import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ImageIcon } from "@phosphor-icons/react"
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage, ContainerCheckbox } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"


const schema = yup
    .object({
        name: yup.string().required('Nome do produto é obrigatório'),
        price: yup.number().positive().required('Preço do produto é obrigatório').typeError('Preço do produto é obrigatório'),
        description: yup.string().required('Descrição do produto é obrigatória'),
        category: yup.object().required('Categoria é obrigatória'),
        offer: yup.boolean().required('Campo de oferta é obrigatório'),    

    })
    .required()


export function EditProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
    const { state: { product } } = useLocation();
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
            productFormData.append('price', data.price * 100);
            productFormData.append('description', data.description);
            productFormData.append('category_id', data.category.id);
            productFormData.append('file', data.file[0]);
            productFormData.append('offer', data.offer);

            await toast.promise(
                api.put(`/products/${product.id}`, productFormData),
                {
                    pending: 'Editando produto...',
                    success: 'Produto editado com sucesso!',
                    error: 'Erro ao editar produto, tente novamente.'
                });


        } catch (error) {
            console.error('Erro ao editar produto:', error);
            toast.error('Erro ao editar produto. Tente novamente.');
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
                    <Input type="text" {...register("name")} defaultValue={product.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço do Produto</Label>
                    <Input type="number" {...register("price")} defaultValue={product.price / 100} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup>
                    <Label>Descrição do Produto</Label>
                    <Input type="text" {...register("description")} defaultValue={product.description} />
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
                        defaultValue={product.category}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={category => category.name}
                                getOptionValue={category => category.id}
                                placeholder="Selecione a categoria"
                                menuPortalTarget={document.body}
                                defaultValue={product.category}
                            />
                        )}
                    />
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <ContainerCheckbox>
                        <input type="checkbox" {...register("offer")} defaultChecked={product.offer} />
                        <Label>Produto em Oferta ?</Label>
                    </ContainerCheckbox>
                </InputGroup>

                <SubmitButton type="submit">Editar Produto</SubmitButton>
            </Form>
        </Container>
    );
}