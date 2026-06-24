export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        Montês
      </div>

      <nav>
        <a href="#produtos">Produtos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>

      <button className="cta">
        Comprar
      </button>
    </header>
  )
}