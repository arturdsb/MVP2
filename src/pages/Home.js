import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="eyebrow">
          Bem-vindo à Montês
        </span>

        <h1>
          O verdadeiro sabor
          <br />
          do café das
          <span> montanhas mineiras</span>
        </h1>

        <p>
          Descubra cafés especiais produzidos com
          qualidade, tradição e torra artesanal para
          proporcionar uma experiência única.
        </p>

        <Link to="/produtos" className="hero-btn">
          Acesse nossa página
        </Link>

      </div>

    </section>
  );
}