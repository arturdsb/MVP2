
import products from "../products.json";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Item from "../components/Item";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Products() {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {

        setProductList(products.coffeekits);

        setLoading(false);

    }, 1000);

  }, []);

  if (loading) {

    return (

        <>
            <Header />

            <section className="products-section">

                <h2>Carregando produtos...</h2>

            </section>

            <Footer />

        </>

    );

  }

  return (
    <div>

      <Header />

      <Hero />

      <section
        id="produtos"
        className="products-section"
      >

        <h2>Nossos Produtos</h2>

        <div className="main-products">

          {productList.map(product => (

            <Item
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}
