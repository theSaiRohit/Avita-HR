import AboutInfo from "@/modules/about/about-info";
import Founder from "@/modules/about/founder";
import MainAbout from "@/modules/about/main-about";
import Mission from "@/modules/about/mission";
import Head from "next/head";
import React from "react";

export default function about() {
  return (
    <>
      <Head>
        <title>About | Avita HR Solutions</title>
        <meta
          name="description"
          content="AVITA HR Solutions is designed to meet the governing need for professional approach in Human Resource Development, Recruitment and Training activities in the corporate world.  AVITA HR Solutions is backed by professionals having rich industry experience in India and overseas countries.  Our database consists of highly qualified and experienced professionals."
        />
      </Head>
      <section id="about">
        <MainAbout />
        <Mission />
        <AboutInfo />
        <Founder />
      </section>
    </>
  );
}
