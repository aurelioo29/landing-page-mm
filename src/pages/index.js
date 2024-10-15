import { useEffect } from "react";
import Contact from "@/components/section/Contact";
import Curriculum from "@/components/section/Curiculum";
import Faq from "@/components/section/Faq";
import Hero from "@/components/section/Hero";
import Sidebar from "@/components/section/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { journeyData } from "@/data/journeyData";
import JourneySteps from "@/components/section/JourneyProgram";
import ProgramCards from "@/components/section/MainProgram";
import MethodDelivery from "@/components/section/MethodDelivery";
import ScrollToTop from "@/components/modal/ScrollToTop";
import ClientLogos from "@/components/section/ClientLogo";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "@/components/section/Timeline";
import Price from "@/components/section/Price";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  return (
    <>
      <Head>
        <title>Data Expert Bootcamp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Hero />
      <Flex
        direction={{ base: "column", md: "row" }}
        pl={{ base: 0, md: 4 }}
        pt={{ base: 0, md: 20 }}
      >
        <Sidebar />
        <Box flex="1" overflow={"hidden"}>
          <Box id="program-cards">
            <ProgramCards />
          </Box>
          <MethodDelivery />
          <JourneySteps data={journeyData} />
          <Curriculum />
          <Timeline />
          <Price />
          <ClientLogos />
          <Box id="faq-section">
            <Faq />
          </Box>
        </Box>
      </Flex>
      <Contact />
      <ScrollToTop />
    </>
  );
}
