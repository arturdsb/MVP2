import { useState } from "react";

export default function Item({ product }) {

    const [quantity, setQuantity] = useState(1);

    const minus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const plus = () => {
        setQuantity(quantity + 1);
    };

    const buyProduct = () => {
        const total =
            Math.round(
                (product.price * quantity) * 100
            ) / 100;

        if (
            window.confirm(
                `Finalizar compra por R$ ${total}?`
            )
        ) {
            alert("Pedido realizado com sucesso!");
            setQuantity(1);
        }
    };

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

                <h3 className="coffee-title">
                    {product.title}
                </h3>

                <p className="coffee-description">
                    Grãos selecionados e torrados
                    artesanalmente em Minas Gerais.
                </p>

                <div className="coffee-price">
                    R$ {product.price.toFixed(2)}
                </div>

                <div className="quantity-box">

                    <button
                        onClick={minus}
                        className="quantity-btn"
                    >
                        −
                    </button>

                    <span>{quantity}</span>

                    <button
                        onClick={plus}
                        className="quantity-btn"
                    >
                        +
                    </button>

                </div>

                <button
                    className="buy-btn"
                    onClick={buyProduct}
                >
                    Comprar Agora
                </button>

            </div>

        </article>
    );
}