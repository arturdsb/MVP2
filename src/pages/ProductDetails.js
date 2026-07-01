
import { useLocation, useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetails() {

    const { state } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <Header />

<div className="detail-content">

    <button
        className="back"
        onClick={() => navigate("/produtos")}
    >
        ← Voltar aos produtos
    </button>

    <div className="detail-card">

        <div className="detail-image-box">

            <span className="coffee-badge">
                Café Especial
            </span>

            <img
                className="detailed-image"
                src={state.p.image}
                alt={state.p.title}
            />

        </div>

        <div className="detail-info">

            <h1>{state.p.title}</h1>

            <p className="detail-description">
                Produzido nas montanhas de Minas Gerais,
                este café especial possui torra artesanal,
                grãos cuidadosamente selecionados e aroma
                intenso. Ideal para quem busca uma bebida
                equilibrada, encorpada e de alta qualidade.
            </p>

            <div className="coffee-price">
                R$ {state.p.price.toFixed(2)}
            </div>

            <button className="buy-btn">
                Comprar Agora
            </button>

        </div>

    </div>

</div>

            <Footer />
        </>
    );
}