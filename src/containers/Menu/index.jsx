import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
    Container,
    Banner,
    CategoryMenu,
    ProductsContainer,
    CategoryButton,
    BackButton,
    CategoryHeader,
} from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    // 🔹 Ler categoria do query string
    useEffect(() => {
        const categoryId = searchParams.get("categoria");
        
        if (categoryId) {
            const numericCategoryId = Number(categoryId);
            setActiveCategory(numericCategoryId);
        } else {
            setActiveCategory(0);
        }
    }, [searchParams]);

    // 🔹 Carregar categorias e produtos
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories");
            const newCategories = [{ id: 0, name: "Todas" }, ...data];
            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get("/products");

            const newProducts = data.map((product) => ({
                ...product,
                currencyValue: formatPrice(product.price),
            }));

            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();
    }, []);

    // 🔹 Filtrar produtos pela categoria
    useEffect(() => {
        if (products.length === 0) return; // Não filtrar se não há produtos
        
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter((product) => {
                // Verifica diferentes possibilidades de estrutura
                const categoryId = Number(product.category_id || product.category?.id || product.categoryId);
                return categoryId === Number(activeCategory);
            });
            setFilteredProducts(newFilteredProducts);
        }
    }, [activeCategory, products]);

    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR <br />
                    HAMBURGER <br />
                    DA CIDADE!
                </h1>
                <span>
                    Venha experimentar nossos deliciosos hambúrgueres artesanais, feitos
                    com ingredientes frescos e de alta qualidade. Satisfação garantida!
                </span>
            </Banner>
           {/* 👇 Aqui o BackButton foi movido para o CategoryHeader */}
      <CategoryHeader>
        <BackButton onClick={() => navigate("/")}>← Voltar</BackButton>
        <CategoryMenu>
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              $isActiveCategory={activeCategory === category.id}
              onClick={() => {
                navigate(`/cardapio?categoria=${category.id}`);
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryMenu>
      </CategoryHeader>

            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </Container>
    );
}
