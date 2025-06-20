import React from "react";
import Layout from "../Layout/Layout";
import "./Products.css";
import { allProducts } from "../../Utils/allProducts";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Layout>
      <div className="Products-container">
        {allProducts.map((product) => {
          const directionClass =
            product.id % 2 === 0 ? "reverse-layout" : "normal-layout";
          return (
            <Link
              to={`/products/${encodeURIComponent(product.productName)}`}
              key={product.id}
              className="product-List-container"
            >
              <div className={`product-wrapper ${directionClass}`}>
                <img src={product.Image} alt={product.productName} />
                <div className="product-details-wrapper">
                  <span className="productName">{product.productName}</span>
                  <span className="product-desc">{product.desc}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Products;
