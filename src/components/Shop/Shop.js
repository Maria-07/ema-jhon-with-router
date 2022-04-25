import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
// import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // const [products] = useProducts();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    axios(`http://localhost:5000/product?page=${page}&size=${size}`).then(
      (data) => setProducts(data.data)
    );
  }, [page, size]);

  useEffect(() => {
    axios("http://localhost:5000/productCount").then((data) => {
      // const count = data.data.count;
      // const pages = Math.ceil(count / 10);
      // setPageCount(pages);
      setPageCount(Math.ceil(data.data.count / 10));
    });
  }, []);

  // useEffect(() => {
  //   const storedCart = getStoredCart();
  //   const savedCart = [];
  //   for (const id in storedCart) {
  //     const addedProduct = products.find((product) => product._id === id);
  //     if (addedProduct) {
  //       const quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       savedCart.push(addedProduct);
  //     }
  //   }
  //   setCart(savedCart);
  // }, [products]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}

        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              onClick={() => setPage(number)}
              // className="py-1 px-3 mx-1 bg-gray-100 border-2"
              className={page === number ? "selected" : ""}
            >
              {number + 1}
            </button>
          ))}
          {size}

          <select onChange={(e) => setSize(e.target.value)}>
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="25">20</option>
          </select>
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button className=" text-white text-lg mt-10 py-2 px-5 bg-orange-400">
              Review Order{" "}
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
