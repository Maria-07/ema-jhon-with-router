import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItems.css";

const ReviewItems = ({ product, handleRemoveProduct }) => {
  const { name, img, price, shipping, quantity } = product;
  console.log(product);
  return (
    <div className="bg-yellow-100 w-10/12 p-5 m-7 flex">
      <div>
        <img className="w-20 h-20" src={img} alt="" />
      </div>
      <div className="mx-3 product-card w-full ">
        <div className="details">
          <p title={name}>
            Product Name :{name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            price : $<span className=" text-red-800">{price}</span>
          </p>
          <p>Quantity : {quantity}</p>
          <p>Shipping : {shipping}</p>
        </div>
        <div
          className="delete-btn"
          onClick={() => handleRemoveProduct(product)}
        >
          <FontAwesomeIcon
            className="w-5 h-5 text-red-700"
            icon={faBan}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
