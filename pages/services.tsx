import ServicesDesc from "@/modules/services/services-desc";
import ServicesSidebar from "@/modules/services/services-sidebar";
import ServiceContext from "@/contexts/service-context";
import ServicesContact from "@/modules/services/services-contact";
import ServicesHeading from "@/modules/services/services-heading";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Avita HR Solutions</title>
        <meta
          name="description"
          content="AVITA HR Solutions is designed to meet the governing need for professional approach in Human Resource Development, Recruitment and Training activities in the corporate world.  AVITA HR Solutions is backed by professionals having rich industry experience in India and overseas countries.  Our database consists of highly qualified and experienced professionals."
        />
      </Head>
      <section id="services">
        <ServicesHeading />
        <div className="services-scroll">
          <ServiceContext>
            <ServicesSidebar />
            <ServicesDesc />
          </ServiceContext>
        </div>
        <ServicesContact />
      </section>
    </>
  );
}
