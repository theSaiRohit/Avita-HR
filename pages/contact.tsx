import ContactHeading from "@/modules/contact/contact-heading";
import MainContact from "@/modules/contact/main-contact";
import Head from "next/head";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact | Avita HR Solutions</title>
        <meta
          name="description"
          content="AVITA HR Solutions is designed to meet the governing need for professional approach in Human Resource Development, Recruitment and Training activities in the corporate world.  AVITA HR Solutions is backed by professionals having rich industry experience in India and overseas countries.  Our database consists of highly qualified and experienced professionals."
        />
      </Head>
      <section id="contact">
        <ContactHeading />
        <MainContact />
      </section>
    </>
  );
}
