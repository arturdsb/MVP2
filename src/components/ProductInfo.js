import { Link } from "react-router-dom";

export default function ProductInfo({
    product,
    layout = "card",
    showLink = true,
    showCode = false,
    id
}) {

    if (layout === "detail") {
        return (
            <div className="detail-image-box">

                <span className="coffee-badge">
                    Café Especial
                </span>

                <img
                    className="detailed-image"
                    src={product.image}
                    alt={product.title}
                />

            </div>
        );
    }

    return (
        <>

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

                {showLink ? (

                    <Link
                        to={`/product_details/${product.id}`}
                        state={{ p: product }}
                        className="product-link"
                    >
                        <h3 className="coffee-title">
                            {product.title}
                        </h3>
                    </Link>

                ) : (

                    <>
                        <h2 className="coffee-title">
                            {product.title}
                        </h2>

                        {showCode && (
                            <p className="product-code">
                                Código do produto: {id}
                            </p>
                        )}
                    </>

                )}

                <p className="coffee-description">
                    Grãos selecionados e torrados
                    artesanalmente em Minas Gerais.
                </p>

                <div className="coffee-price">
                    R$ {product.price.toFixed(2)}
                </div>

            </div>

        </>
    );
}