import useScrollPosition from "@/hooks/use-scroll-position";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const scrollPosiNum = useScrollPosition();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const headCurrentRef = headerRef.current;
    if (headCurrentRef) {
      if (scrollPosiNum > 100) {
        headCurrentRef.classList.add("dark-bg");
      } else {
        headCurrentRef.classList.remove("dark-bg");
      }
    }
  }, [scrollPosiNum]);

  return (
    <header id="main-header" className="dark-bg" ref={headerRef}>
      <Link href="/" className="img-container logo">
        <Image src="/assets/images/bg.png" alt="logo" fill />
      </Link>
      <div className={`nav-container ${open ? "active" : "inactive"}`}>
        <nav>
          <Link href="/" onClick={() => setOpen(!open)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(!open)}>
            About
          </Link>
          <Link href="/services" onClick={() => setOpen(!open)}>
            Services
          </Link>
          <Link href="/" onClick={() => setOpen(!open)}>
            Connections
          </Link>
          <Link href="/clients" onClick={() => setOpen(!open)}>
            Clients
          </Link>
          <Link href="/contact" onClick={() => setOpen(!open)}>
            Contact
          </Link>
        </nav>
        <div className="login-container">
          <Link href="/">Log in</Link>
          <Link href="/">Sign up</Link>
        </div>
      </div>
      <div className={`hamburger ${open ? "active" : "inactive"}`} onClick={toggleOpen}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}
