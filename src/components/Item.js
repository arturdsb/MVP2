import { Link } from "react-router-dom";
import QuantityBuy from "./QuantityBuy";

export default function Item({ product }) {

    return (
        <article className="coffee-card">

            <div className="coffee-image-container">
                <img
                    src={product.image}
                    alt={product.title}
                    className="coffee-image"
                />

                <span className="coffee-badge">
                    Café Especial
                </span>
            </div>

            <div className="coffee-content">

                <Link to={`/product_details/${product.id}`} state={{p: product}} className="product-link">
                    <h3 className="coffee-title">
                        {product.title}
                    </h3>
                </Link>

                <p className="coffee-description">
                    Grãos selecionados e torrados
                    artesanalmente em Minas Gerais.
                </p>

                <div className="coffee-price">
                    R$ {product.price.toFixed(2)}
                </div>

                <QuantityBuy product={product} />

            </div>

        </article>
    );
}