import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";

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
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
