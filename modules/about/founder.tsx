import Image from "next/image";

export default function Founder() {
  return (
    <div className="founder">
      <div className="profile">
        <div className="img-container">
          <Image src="/assets/images/default profile pic.webp" alt="hero-img" fill sizes="100%" />
        </div>
        <span className="founder-name">Mr. Mohan Venkatraman</span>
      </div>
      <div className="founder-desc">
        <h2 className="founder-heading">Our Founder</h2>
        <p className="desc">
          The founder director, Mr. Mohan Venkatraman is a seasoned HR professional backed with 30+ years of experience.
          He holds a Degree in Commerce and PG Degree in Human Resource Management. He has worked for Companies viz.
          Britannia Industries, Integrated Financec Company Ltd., Professional Consultancy services in India and
          overseas Companies such as OTE Group, Suhail Bahwan Automotive Group and General Electric & Trading Company in
          Sultanate of Oman.
          <br />
          <br />
          Further, his last assignment was with the reputed M G Muthu Group which has got diversified businesses such as
          Hospitality (Hotels & Resorts) in India. Portugal, UK and Cuba and Logistics, IMFL Liquor manufacturing,
          Restaurant chain, Entertainment Theme Park, Transport business and allied activities in India as their
          President – Corporate HR.
        </p>
      </div>
    </div>
  );
}
