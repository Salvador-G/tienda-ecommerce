import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Size: {product.size}</p>
            <img src={product.image} alt={product.name} />
        </div>
    );
};

export default Product;