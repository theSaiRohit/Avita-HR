import Link from "next/link";

export default function ServicesContact() {
  return (
    <div className="services-contact">
      <p className="interested">Interested in availing one of our services?</p>
      <Link href="/contact" className="contact-btn">
        Contact us
      </Link>
    </div>
  );
}
