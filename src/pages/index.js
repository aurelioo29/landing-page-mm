import Contact from "@/components/section/Contact";
import Faq from "@/components/section/Faq";
import Hero from "@/components/section/Hero";
import Sidebar from "@/components/section/Sidebar";
import TimePrice from "@/components/section/TimePrice";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Mastery Bootcamp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>

      <Hero />

      <Flex p={20}>
        <Sidebar />
        <Box flex="1" pl={10}>
          <Box>
            <TimePrice />
            <Faq />
          </Box>
        </Box>
      </Flex>

      <Contact />
    </>
  );
}
