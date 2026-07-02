
import products from "../products.json";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Item from "../components/Item";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Products() {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {

    setTimeout(() => {

        setProductList(products.coffeekits);

        setLoading(false);

    }, 1000);

  }, []);

    useEffect(() => {

    if (location.state?.scrollTo) {

        const element = document.getElementById(location.state.scrollTo);

        if (element) {

            element.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

  }, [location]);

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

      <Hero
        eyebrow="Café Especial"
        title={
          <>
            Café fresco,
            <br />
            torrado em
          </>
        }
        highlight=" Minas Gerais"
        description="Grãos especiais acima de 84 pontos, torrados artesanalmente e enviados direto para sua casa."
      />

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
