import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import CoolingExperience from "../components/home/CoolingExperience";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CoolingExperience />
      </main>
    </>
  );
}

export default Home;
