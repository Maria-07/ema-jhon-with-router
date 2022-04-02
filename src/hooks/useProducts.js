import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("products.json").then((data) => setProducts(data.data));
  }, []);

  return [products, setProducts];
};

export default useProducts;
