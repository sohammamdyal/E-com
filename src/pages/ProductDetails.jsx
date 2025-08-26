import React from "react";
import { useParams } from "react-router-dom";
import productsdata from "./../data/Product";



const ProductDetails = () => {
  const { id } = useParams(); 
  
  const product = productsdata.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
    <div className="card container my-4 text-center">
      <div>
        <h1 className="text-uppercase">{product.name}</h1>
      <img src={product.image} alt={product.name} className="img-fluid " style={{width:300}} />
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      </div>
    </div>
    
    </>
  );
};

export default ProductDetails;
