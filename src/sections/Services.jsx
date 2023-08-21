import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import Slide from "react-reveal"
const Services = () => {
  return (
    
      <Slide bottom>
    <section className="flex flex-wrap justify-center gap-6 max-container">
      {services.map((s) => (
        <ServiceCard key={s.label} {...s} />
        ))}
    </section>
        </Slide>
  );
};

export default Services;
