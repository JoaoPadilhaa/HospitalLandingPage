import Hero from "../../components/Hero/hero";
import Ourservices from "../../components/SectionServices/services";
import AboutUs from "../../components/AboutUs/aboutus";
import Doctors from "../../components/Doctors/doctors";
import Testimonials from "../../components/Testimonials/testimonials";
import ContactUs from "../../components/Contactus/contactus";


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

      <section className="testimonials">
        <Testimonials />
      </section>

      <section className="ContactUss">
        <ContactUs />
      </section>
    </main>

  );
}

export default Home;