import { useLocation, useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import QuantityBuy from "../components/QuantityBuy";
import ProductInfo from "../components/ProductInfo";

export default function ProductDetails() {

    //const { state } = useLocation();
    const location = useLocation();
    const { state } = location;

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

                    <ProductInfo
                        product={state.p}
                        layout="detail"
                    />

                    <div className="detail-info">

                        <h1>{state.p.title}</h1>

                        <p className="product-code">
                            Código do produto: {id}
                        </p>

                        <p className="detail-description">
                            Produzido nas montanhas de Minas Gerais,
                            este café especial possui torra artesanal,
                            grãos cuidadosamente selecionados e aroma
                            intenso. Ideal para quem busca uma bebida
                            equilibrada, encorpada e de alta qualidade.
                            <br /><br />
                            Cada lote é torrado semanalmente para garantir
                            máximo frescor e preservar todas as
                            características sensoriais dos grãos especiais.
                        </p>

                        <div className="coffee-price">
                            R$ {state.p.price.toFixed(2)}
                        </div>

                        <QuantityBuy
                            product={state.p}
                        />

                         <p className="current-route">
                            URL atual: {location.pathname}
                        </p>
                    </div>

                </div>

            </div>
           

            <Footer />
        </>
    );
}