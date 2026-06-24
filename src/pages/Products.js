import { useState } from "react";

import products from "../products.json";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Item from "../components/Item";
import Footer from "../components/Footer";

export default function Products() {

  const [productList] =
    useState(products.coffeekits);

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
