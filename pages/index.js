import Aboutme from "../components/aboutme/aboutme";
import Skills from "../components/skills/skills";
import ContactMe from "../components/contactme/contactme";
export default function Home() {
  return (
    <>
      <main>
        <Aboutme />
        <Skills />
        <ContactMe />
      </main>
    </>
  );
}
