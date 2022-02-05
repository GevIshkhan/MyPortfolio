import Aboutme from "../components/aboutme/aboutme";
import Skills from "../components/skills/skills";
import ContactMe from "../components/contactme/contactme";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi friend! I'm Ishkhan Gevorgyan. I'm a web developer. I have more than 5 years of web
          development experience."
        />
        <title>Portfolio Ishkhan Gevorgyan</title>
      </Head>
      <main>
        <Aboutme />
        <Skills />
        <ContactMe />
      </main>
    </>
  );
}
