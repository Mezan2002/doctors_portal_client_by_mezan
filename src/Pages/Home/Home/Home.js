import React from "react";
import Banner from "../Banner/Banner";
import InfoCard from "../InfoCard/InfoCard";
import ServiceCards from "./ServiceCards/ServiceCards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <ServiceCards></ServiceCards>
    </div>
  );
};

export default Home;
