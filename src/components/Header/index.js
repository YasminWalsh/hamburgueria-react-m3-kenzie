import { useState } from "react";
import style from "./style.module.css";
import logo from "../../assets/logo.svg";

function Header({ showProducts }) {
  const [inputName, setInputName] = useState("");

  return (
    <header className={style.Header}>
      <div className="container">
        <div className={style.flexGrid}>
          <img alt="Logo" src={logo}></img>

          <div className={style.campoBusca}>
            <input
              type="text"
              placeholder="Digite aqui sua pesquisa"
              onChange={({ target }) => setInputName(target.value)}
            ></input>
            <button onClick={() => showProducts(inputName)}>Pesquisar</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
