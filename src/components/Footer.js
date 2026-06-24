export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>
            Mon<span>tê</span>s
          </h2>

          <p>
            Café especial torrado semanalmente,
            direto das montanhas de Minas Gerais
            para sua casa.
          </p>

        </div>

        <div className="footer-column">
          <h4>Produtos</h4>

          <a href="/">Kits</a>
          <a href="/">Assinaturas</a>
          <a href="/">Presentes</a>
        </div>

        <div className="footer-column">
          <h4>Contato</h4>

          <a href="/">WhatsApp</a>
          <a href="/">Instagram</a>
          <a href="/">Email</a>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Montês Café. Todos os direitos reservados.
        </p>

      </div>

    </footer>
  );
}