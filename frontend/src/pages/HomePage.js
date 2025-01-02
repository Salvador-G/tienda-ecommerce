import React, { useEffect, useState } from 'react';
import Product from '../components/Product';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="home-page">
            <h1>Últimos Productos</h1>
            <div className="product-list">
                {products.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;