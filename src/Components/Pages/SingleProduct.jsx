import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./SingleProduct.css";
import { allProducts } from "../../Utils/allProducts";
import { BiCart } from "react-icons/bi";

const SingleProduct = () => {
  const { name } = useParams();

  return (
    <Layout>
      <div className="singleProduct-container">
        <h1>{decodeURIComponent(name)}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          ullam ratione harum earum voluptatem blanditiis consequuntur eum
          itaque distinctio accusantium nihil est nam recusandae, quidem quas
          deleniti qui cumque asperiores?
        </p>
        {allProducts
          .filter((singleproduct) => singleproduct.productName == name)
          .map((product) => (
            <div key={product.id} className="singleProduct-wrapper ">
              <div className="single-product-details">
                <div>
                  {product.details.map((details) => (
                    <div className="details-wrapper">
                      <div className="details-icon">
                        <BiCart />{" "}
                      </div>
                      <span key={details.pid}>{details.list}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img src={product.Image} alt={product.productName}  />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default SingleProduct;
