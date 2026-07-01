import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">

      <div className="logo">
        Montês
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
      </nav>

      <Link to="/produtos" className="cta">
        Comprar
      </Link>

    </header>
  );
}