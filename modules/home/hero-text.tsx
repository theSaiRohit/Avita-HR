import Image from "next/image";
import Link from "next/link";

export default function HeroText() {
  return (
    <div className="hero-text">
      <div className="text">
        <h1>
          <span>AVITA</span>
          HR Solutions
        </h1>
        <h2>
          <span>HR Consultancy</span>/<span>Recruitment</span> / <span>Training</span>
        </h2>
        <div className="cta">
          <Link href="/about">Know More</Link>
          <p>Empowering Organizations through HR Excellence & Maximizing Performance through HR Strategies</p>
        </div>
      </div>
      <div className="img-container">
        <Image src="/assets/images/hero-img.jpg" alt="hero-img" sizes="100%" fill />
      </div>
    </div>
  );
}
