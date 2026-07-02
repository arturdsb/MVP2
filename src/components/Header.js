import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">

      <Link className="logo" to="/">
        Mon<span>tê</span>s
      </Link>

      <nav>
        <Link to="/">Home
        </Link>
        <Link to="/produtos"
              state={{scrollTo:"produtos" }}>Produtos
        </Link>
        <Link to="/produtos"
              state={{scrollTo:"contato"}}> Contato

        </Link>

      </nav>

      <Link to="/produtos" 
            className="cta"
            state={{scrollTo: "produtos"}}>
        Comprar
      </Link>

    </header>
  );
}