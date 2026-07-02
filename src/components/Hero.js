import { Link } from "react-router-dom";

export default function Hero({
  eyebrow,
  title,
  highlight,
  description,
  buttonText,
  buttonLink
}) {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="eyebrow">
          {eyebrow}
        </span>

        <h1>
          {title}
          <span>{highlight}</span>
        </h1>

        <p>{description}</p>

        {buttonText && (
          <Link
            to={buttonLink}
            className="hero-btn"
          >
            {buttonText}
          </Link>
        )}

      </div>
    </section>
  );
}