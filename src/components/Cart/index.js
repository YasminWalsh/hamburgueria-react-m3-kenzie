import ProductCart from "./ProductCart";
import TotalProduct from "./TotalProduct";
import style from "./style.module.css";

function Cart({ cartProduct, setCartProduct, removeProduct }) {
  return (
    <div className={style.cart}>
      <div className={style.cartGrid}>
        <div>
          <h4>Carrinho de compras</h4>
        </div>

        <ul>
          {cartProduct.length > 0 ? (
            cartProduct.map((productCart, index) => (
              <ProductCart
                img={productCart.img}
                index={index}
                name={productCart.name}
                category={productCart.category}
                price={productCart.price}
                id={productCart.id}
                removeProduct={removeProduct}
                qtd={productCart.qtd}
              />
            ))
          ) : (
            <div className={style.noProduct}>
              <p>Sua sacola está vazia</p>
              <span>Adicione itens no carrinho</span>
            </div>
          )}
        </ul>
        <div>
          <TotalProduct
            setCartProduct={setCartProduct}
            cartProduct={cartProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
