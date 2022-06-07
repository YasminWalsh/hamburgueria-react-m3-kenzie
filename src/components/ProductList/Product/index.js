import style from "./style.module.css";

function Product({ name, category, price, img, id, handleClick }) {
  return (
    <li id={id} className={style.product}>
      <div className={style.img}>
        <img alt="Hamburguer" src={img}></img>
      </div>

      <div className={style.boxInfos}>
        <p>{name}</p>
        <span>{category}</span>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          })}
        </span>
        <button onClick={() => handleClick(id)}>Adicionar</button>
      </div>
    </li>
  );
}

export default Product;
