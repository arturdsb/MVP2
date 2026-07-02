import Hero from "../components/Hero";

export default function Home() {
  return (
    <Hero
      eyebrow="Bem-vindo à Montês"
      title={
        <>
          O verdadeiro sabor
          <br />
          do café das
        </>
      }
      highlight=" montanhas mineiras"
      description="Descubra cafés especiais produzidos com qualidade, tradição e torra artesanal para proporcionar uma experiência única."
      buttonText="Acesse nossa página"
      buttonLink="/produtos"
    />
  );
}