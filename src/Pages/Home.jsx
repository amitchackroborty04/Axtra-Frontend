import React from "react";
import Heders from "../Components/Heders";
import Hero from "../Components/Hero";
import Marketin_agence from "../Components/Marketin_agence";
import Services from "../Components/Services";
import Featured_Work from "../Components/Featured_Work";
import Comitment from "../Components/Comitment";
import { Why_chose_us } from "../Components/Why_chose_us";
import Pricing_Table from "../Components/Pricing_Table";
import Recent_blog from "../Components/Recent_blog";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Heders />
      <Hero />
      <Marketin_agence />
      <Services />
      <Featured_Work />
      <Comitment />
      <Why_chose_us />
      <Pricing_Table />
      <Recent_blog />
      <Footer/>
    </div>
  );
};

export default Home;
