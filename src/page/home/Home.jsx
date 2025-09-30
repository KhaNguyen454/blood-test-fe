import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/home/HeroSection";
import ServiceSection from "../../components/home/ServiceSection";
import DoctorSection from "../../components/home/DoctorSection";
import BlogSection from "../../components/home/BlogSection";
import CallToActionSection from "../../components/home/CallToActionSection";
import Footer from "../../components/footer/Footer";
// import "./HomeAnimation.css";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-animate");
    const onScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && rect.bottom > 80) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <section id="hero" className="section-animate">
        <HeroSection />
      </section>
      <section id="services" className="section-animate">
        <ServiceSection />
      </section>
      <section id="doctors" className="section-animate">
        <DoctorSection />
      </section>
      <section id="blog" className="section-animate">
        <BlogSection />
      </section>
      <section className="section-animate">
        <CallToActionSection />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
