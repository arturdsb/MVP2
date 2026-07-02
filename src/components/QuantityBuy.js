import { useState } from "react";

export default function QuantityBuy({ product }) {

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
            Math.round(product.price * quantity * 100) / 100;

        if (
            window.confirm(
                `Finalizar compra por R$ ${total.toFixed(2)}?`
            )
        ) {

            alert("Pedido realizado com sucesso!");

            setQuantity(1);
        }

    };

    return (

        <>

            <div className="quantity-box">

                <button
                    className="quantity-btn"
                    title="Remover uma unidade"
                    onClick={minus}
                >
                    −
                </button>

                <span>{quantity}</span>

                <button
                    className="quantity-btn"
                    title="Adicionar uma unidade"
                    onClick={plus}
                >
                    +
                </button>

            </div>

            <button
                className="buy-btn"
                title="Adicionar este item ao pedido"
                onClick={buyProduct}
            >
                Comprar Agora
            </button>

        </>

    );

}