import Hero from "../../components/Hero/hero";
import Ourservices from "../../components/SectionServices/services";

function Home() {
  return (
    <main className="home">
      <div className="divHero">
        <Hero />
      </div>

      <section className="services">
        <Ourservices />
      </section>
    </main>

  );
}

export default Home;