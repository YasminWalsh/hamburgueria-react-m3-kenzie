import Product from "./Product";
import style from "./style.module.css";

function ProductList({ products, handleClick, filter }) {
  return (
    <ul className={style.productList}>
      {(filter.length > 0 ? filter : products).map((product) => (
        <Product
          id={product.id}
          key={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          img={product.img}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default ProductList;
