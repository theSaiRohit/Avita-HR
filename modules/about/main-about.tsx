import Image from "next/image";

export default function MainAbout() {
  return (
    <div className="main-about">
      <div className="main-about-text">
        <h1>About us</h1>
        <p className="about-desc">
          AVITA HR Solutions is designed to meet the governing need for professional approach in Human Resource
          Development, Recruitment and Training activities in the corporate world. AVITA HR Solutions is backed by
          professionals having rich industry experience in India and overseas countries. Our database consists of highly
          qualified and experienced professionals.
          <br />
          <br />
          We provide staff training and development from Needs Analysis to Evaluation Processes, Performance Management
          tools, policies and procedures for effective management and other HR managed services.
        </p>
      </div>
      <div className="img-container">
        <Image src="/assets/images/hero-img.jpg" alt="hero-img" fill sizes="100%" />
      </div>
    </div>
  );
}
