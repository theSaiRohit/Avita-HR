import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div className="visual-links">
          <Link href="/" className="img-container logo">
            <Image src="/assets/images/logo.png" alt="logo" fill />
          </Link>
          <div className="icons-container">
            <Link href="/">
              <FaLinkedin />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
            <Link href="/">
              <FaEnvelope />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
            <Link href="/">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
        <div className="text-links">
          <div className="col col-one">
            <h3>Sitemap</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="col col-two">
            <h3>Contact</h3>
            <Link href="mailto: avitahrs@gmail.com" className="mail-info">
              avitahrs@gmail.com
            </Link>
            <Link href="tel:+919892901005" className="phone-info">
              <FaPhoneAlt />
              +919892901005
            </Link>
            <Link href="tel:+919892901005" className="phone-info">
              <FaPhoneAlt />
              +919892901005
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <span>Terms and conditions</span>
        <span>Privacy Policy</span>
        <span>Copyright © Avita HR Agency, 2023-24</span>
      </div>
    </footer>
  );
}
