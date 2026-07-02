
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

            <section className="products-section loading-section">

                <div className="spinner"></div>

                <h2>Carregando nossos cafés especiais...</h2>

                <p>
                    Aguarde um instante enquanto preparamos
                    os melhores grãos para você.
                </p>

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
