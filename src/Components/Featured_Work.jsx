import React from "react";
import { Container } from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import image1 from "../assets/images/3.jpg";

const Featured_Work = () => {
  return (
    <section className="bg-black">
      <Container>
        <div>
          <Flex className=" flex-wrap lg:flex-nowrap gap-y-10 items-center py-16 relative">
            <div className="w-full lg:w-[50%]">
              <h6 className="text-base font-normal text-[rgb(255,255,255)] text-center lg:text-left">Featured </h6>
              <h6 className="ftex-base font-normal text-[rgb(255,255,255)] text-center lg:text-left"> Work</h6>

              <h2 className= "text-[50px] lg:text-[200px] text-center lg:text-left font-bold text-white z-50  uppercase mt-10 lg:mt-0  ">Benjon</h2>
              <h2 className="sattic  lg:absolute   top-[389px] left-16  text-[50px] lg:text-[240px] text-center lg:text-left font-bold text-white z-50 mt-3 lg:mt-[-100px] uppercase ">website</h2>
              <h2 className= "text-[50px] lg:text-[240px] text-center lg:text-left font-bold text-white z-50 mt-3  lg:mt-[100px] uppercase">2012</h2>
            </div>
            <div className="w-full lg:w-[50%] z-0">
              <Image src={image1} alt="image1" />
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Featured_Work;
