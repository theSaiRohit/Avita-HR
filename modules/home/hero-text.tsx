import Image from "next/image";
import Link from "next/link";

export default function HeroText() {
  return (
    <div className="hero-text">
      <div className="text">
        <div className="img-container landing-logo">
          <Image src="/assets/images/logo.png" alt="hero-img" fill sizes="100%" />
        </div>
        <h1>
          <span>AVITA</span>
          HER0 Solutions
        </h1>
        <h2>
          <span>HR Consultancy</span>/<span>Recruitment</span> / <span>Training</span>
        </h2>
        <div className="cta">
          <Link href="/about">Know More</Link>
          <p>Empowering Organizations through HR Excellence & Maximizing Performance through HR Strategies</p>
        </div>
      </div>
      <div className="img-container hero-img-container">
        <Image src="/assets/images/hero.png" alt="hero-img" sizes="100%" fill />
      </div>
    </div>
  );
}
