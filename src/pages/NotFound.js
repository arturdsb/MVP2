import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <>
            

            <main className="notfound">

                <div className="notfound-content">

                    <h1>404</h1>

                    <span className="notfound-icon">
                        ☕
                    </span>

                    <h2>
                        Ops... este café não está no nosso cardápio.
                    </h2>

                    <p>
                        Parece que você pegou uma trilha diferente das
                        montanhas de Minas Gerais. A página que procura
                        não foi encontrada.
                    </p>

                    <Link
                        to="/"
                        className="hero-btn"
                    >
                        Voltar para a página inicial
                    </Link>

                </div>

            </main>
            
        </>
    );
}