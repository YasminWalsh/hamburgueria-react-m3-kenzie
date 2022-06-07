import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setFilter(response);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = async (productId) => {
    let newCartProduct = [...cartProduct];
    let include = newCartProduct.some((product, index) => {
      if (product.id === productId) {
        newCartProduct[index].qtd++;
        return true;
      }
      return false;
    });

    if (include) {
      setCartProduct(newCartProduct);
    } else {
      const addCartProduct = await products.find(
        (product) => product.id === productId
      );
      setCartProduct([...cartProduct, { ...addCartProduct, qtd: 1 }]);
    }
    console.log(cartProduct);
  };

  const removeProduct = (index) => {
    let newCartList = [...cartProduct];
    if (newCartList[index].qtd === 1) newCartList.splice(index, 1);
    else newCartList[index].qtd--;
    setCartProduct(newCartList);
  };

  const clearString = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^0-9a-zA-Z]/g, "")
      .replace(/\s/g, "");
  };

  const showProducts = (productName) => {
    if (!productName || productName === "") {
      setFilter([]);
    } else {
      const filteredProduct = products.filter(
        (product) =>
          clearString(product.name).includes(clearString(productName)) ||
          clearString(product.category).includes(clearString(productName))
      );

      setFilter(filteredProduct);
    }
  };

  return (
    <>
      <Header showProducts={showProducts} />
      <div className="Main">
        <div className="container">
          <div className="flexGrid">
            <ProductList
              handleClick={handleClick}
              products={products}
              filter={filter}
            />
            <Cart
              setCartProduct={setCartProduct}
              cartProduct={cartProduct}
              removeProduct={removeProduct}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
