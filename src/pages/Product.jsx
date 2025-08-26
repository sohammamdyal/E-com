import React from "react";

import productsdata from "../data/Product";
import Productcard from "../componats/Productcard";

const Product = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {productsdata.map((val) => (
          <div className="col-md-3 mb-4" key={val.id}>
            <Productcard
             id={val.id} 
            name={val.name}
            img={val.image}
            price={val.price}
            cat={val.category}
            des={val.description}
            />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
