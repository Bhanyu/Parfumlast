import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Products/products.module.scss";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const productsURL = "http://localhost:4000/products";

    async function getCards() {
        const response = await fetch(productsURL);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
    }

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        if (searchQuery === "") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter(product =>
                    product.desc && product.desc.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    }, [searchQuery, products]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <section id={styles.productscards}>
            <div className={styles.container}>
                <div className={styles.productstitle}>
                    <h1>Məhsullar</h1>
                </div>
                <div className={styles.searchbar}>
                    <input
                        type="text"
                        placeholder="Məhsul axtar"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button >Axtar</button>
                </div>
                <div className={styles.cards}>
                    <ul>
                        {filteredProducts && filteredProducts.map((product) => (
                            <li key={product.id}>
                                <Link to={`${product.id}`} className={styles.cardlink}>
                                    <div className={styles.card}>
                                        <div className={styles.cardimage}>
                                            <img src={product.img} alt="" className={styles.cardimg} />
                                        </div>
                                        <div className={styles.cardinfo}>
                                            <h3 className={styles.cardtitle}>{product.desc}</h3>
                                            <p className={styles.cardprice}>Qiymət: {product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Products;

