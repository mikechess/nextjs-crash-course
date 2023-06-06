import React from 'react';

const Product = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 60 },
    });

    const products = await res.json();
    console.log("products data", products);

  return (
    <div>
        {products.map((product) => (
            <div key={product.id}>{product.title}</div>
        ))}
    </div>
  );
}

export default Product;