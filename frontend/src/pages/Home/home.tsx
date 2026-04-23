import Hero from "../../components/Hero/hero";
import Ourservices from "../../components/SectionServices/services";
import AboutUs from "../../components/AboutUs/aboutus";
import Doctors from "../../components/Doctors/doctors";


function Home() {
  return (
    <main className="home">
      <div className="divHero">
        <Hero />
      </div>

      <section className="services">
        <Ourservices />
      </section>
      
      <section className="aboutus">
        <AboutUs />
      </section>

      <section className="doctors">
        <Doctors />
      </section>
    </main>

  );
}

export default Home;