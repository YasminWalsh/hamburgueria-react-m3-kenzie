import Trash from "../../../assets/trash.svg";
import style from "./style.module.css";

function ProductCart({
  img,
  name,
  category,
  price,
  id,
  removeProduct,
  index,
  qtd,
}) {
  return (
    <li id={id} className={style.productCart}>
      <div className={style.gridLeftCart}>
        <div className={style.img}>
          <img alt="produto" src={img}></img>
        </div>
        <div className={style.boxInfoLeft}>
          <p>{name}</p>
          <span>{category}</span>
        </div>
      </div>
      <div className={style.gridRigthCart}>
        <span>
          {(price * qtd).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          })}
        </span>
        <span>Unidades: {qtd}</span>
        <button onClick={() => removeProduct(index)}>
          <img alt="Remover" src={Trash}></img>
        </button>
      </div>
    </li>
  );
}
export default ProductCart;
