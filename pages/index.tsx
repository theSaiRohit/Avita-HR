import Edge from "@/modules/home/edge";
import HeroText from "@/modules/home/hero-text";
import Vision from "@/modules/home/vision";
import Head from "next/head";

export default function Home() {
  // mike check
  return (
    <>
      <Head>
        <title>Avita HR Solutions</title>
        <meta
          name="description"
          content="AVITA HR Solutions is designed to meet the governing need for professional approach in Human Resource Development, Recruitment and Training activities in the corporate world.  AVITA HR Solutions is backed by professionals having rich industry experience in India and overseas countries.  Our database consists of highly qualified and experienced professionals."
        />
      </Head>
      <section id="home">
        <HeroText />
        <Vision />
        <Edge />
      </section>
    </>
  );
}
