import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCarts] = useCart(products);

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCarts(rest);
    removeFromDb(product.id);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="productsContainer ">
          {cart.map((product) => (
            <ReviewItems
              product={product}
              key={product.id}
              handleRemoveProduct={handleRemoveProduct}
            ></ReviewItems>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/inventory">
              <button className=" text-white text-lg mt-10 py-2 px-5 bg-orange-400">
                Proceed Check-Out{" "}
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faArrowRight}
                ></FontAwesomeIcon>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
