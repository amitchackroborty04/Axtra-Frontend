import React from "react";
import { Container } from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import image1 from "../assets/images/1 (1).jpg";
import Primary_text from "./Primary_text";
import { Primary_Button } from "./Primary_Button";

const Marketin_agence = () => {
  return (
    <section className=" bg-black">
      <Container>
        <Flex className="items-center py-[100px] flex-wrap lg:flex-nowrap gap-y-10">
          <div className="w-full lg:w-[50%] ">
            <Image src={image1} alt="image1" />
          </div>
          <div className="w-full lg:w-[50%] relative">
            <div className=" hidden lg:block absolute top-[-145px] left-[154px] border border-[#988c8c] h-[100px]  "></div>
            <div className=" hidden lg:block absolute bottom-[-138px] left-[154px] border border-[#988c8c] h-[560px]  "></div>
            <h5 className="text-[18px font-normal text-white text-center lg:text-left ">Who We Are</h5>
            <h4 className=" text-[30px] lg:text-[60px] font-bold text-white leading-[40px] lg:leading-[60px] mt-10 text-center lg:text-left">
              We are leading digital marketing agency.
            </h4>
            <div className="w-full lg:w-[510px] flex ml-0 lg:ml-[160px] mt-[60px] lg:mt-[100px] text-center lg:text-left">
              <Primary_text
                text="We’re a team of strategic mdigital marketing
                working globally with largest brands, We believe
                that progress only happens when you refused to
                play things safe. We combine ideas and behaviors,
                and insights with design, technological data to
                produce brand experiences that customers love
                our services."
              />
            </div>
            <div className="ml-0 lg:ml-[160px] mt-14 flex justify-center lg:justify-start">
              <Primary_Button text_color="text-white" />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Marketin_agence;
