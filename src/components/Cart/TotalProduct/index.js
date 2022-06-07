import style from "./style.module.css";

function TotalProduct({ setCartProduct, cartProduct }) {
  return (
    <div className={style.totalProduct}>
      <div>
        <label>Valor total:</label>
        <span>
          {cartProduct
            .reduce((acc, current) => acc + current.price * current.qtd, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            })}
        </span>
      </div>
      <button onClick={() => setCartProduct([])}>Remover todos</button>
    </div>
  );
}

export default TotalProduct;
