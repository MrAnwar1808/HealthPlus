import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Info from "../Components/Information/Info";
import About from "../Components/AboutUs/About";
import BookAppointment from "../Components/Bookings/BookAppointment";
import Reviews from "../Components/Review/Reviews";
import Doctors from "../Components/Doctors/Doctors";
import Footer from "../Components/Footer/Footer";


function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
       <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
