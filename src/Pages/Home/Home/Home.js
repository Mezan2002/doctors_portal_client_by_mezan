import React from "react";
import About from "../About/About";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import Banner from "../Banner/Banner";
import InfoCard from "../InfoCard/InfoCard";
import ServiceCards from "./ServiceCards/ServiceCards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <ServiceCards></ServiceCards>
      <About></About>
      <AppointmentCard></AppointmentCard>
    </div>
  );
};

export default Home;
