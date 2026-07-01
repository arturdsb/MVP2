import ProductInfo from "./ProductInfo";
import QuantityBuy from "./QuantityBuy";

export default function Item({ product }) {

    return (

        <article className="coffee-card">

            <ProductInfo
                product={product}
                layout="card"
            />

            <QuantityBuy
                product={product}
            />

        </article>

    );

}