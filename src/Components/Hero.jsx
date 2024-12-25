import React from "react";
import { Container } from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import videoimage from "../assets/images/video.jpg";
import { IoMdPlayCircle } from "react-icons/io";
import Primary_text from "./Primary_text";
import heroimage from "../assets/images/hero_image.jpg";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import star from "../assets/images/star.png";

const Hero = () => {
  return (
    <section >
      <Container>
        <div className="relative">
          <div className="absolute top-0 right-10">
            <Image src={star} alt="star" />
          </div>
        <Flex className="gap-5 items-center justify-center lg:justify-start mt-[80px]">
          <h4 className="text-xl lg:text-[24px] font-bold text-[#121212]  uppercase">
            Digital
          </h4>
          <div className="border border-[#121212] h-[1px] w-[100px] hidden lg:block"></div>
        </Flex>

        <Flex className="justify-between items-center flex-col lg:flex-row gap-y-[100px]">
          <h1 className="text-[100px] lg:text-[240px] font-bold text-[#121212] uppercase mt-[-20px] lg:mt-[-40px]">
            Mark
          </h1>
          <div>
            <Flex className="gap-x-5 items-center ">
              <div className="relative">
                <Image
                  className="object-cover w-[200px] h-[200px] rounded-full"
                  src={videoimage}
                  alt="videoimage"
                />
                <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <IoMdPlayCircle className="text-4xl" />
                </div>
              </div>

              <div className="mr-10">
                <h4 className="text-base  text-[#121212] uppercase leading-1.3">
                  wach{" "}
                </h4>

                <h4 className="text-base  text-[#121212] uppercase leading-1.3">
                  {" "}
                  video intro
                </h4>
              </div>
            </Flex>
          </div>
        </Flex>
        <Flex className="flex-col lg:flex-row gap-y-10 justify-between absolute top-[200px] lg:top-[300px] left-10  lg:right-0">
          <Primary_text
            className="w-full lg:w-[320px] hidden lg:block "
            text="It is a long established fact that a reader will be distracted by the readable content of a page "
          />
          <h1 className="text-[80px] lg:text-[240px] font-bold text-[#121212] uppercase mt-[-100px] pr-0 lg:pr-[200px] ">
            eting
          </h1>
        </Flex>
        <div className="flex  justify-start lg:justify-end mt-[100px]">
          <Image
            className="w-full lg:w-[1000px] bg-cover "
            src={heroimage}
            alt="heroimage"
          />
        </div>

        <h4 className="text-[18px] text-[#555555] text-center mt-[100px]">
          We worked with global largest brands
        </h4>
        <Flex className="w-full lg:max-w-[1296px] mx-auto gap-x-10 lg:justify-between mt-10 px-0 lg:px-[80px] pb-[100px] ">
          <div>
            <Image src={image1} alt="image1" />
          </div>
          <div>
            <Image src={image2} alt="image1" />
          </div>
          <div>
            <Image src={image3} alt="image1" />
          </div>
          <div>
            <Image src={image4} alt="image1" />
          </div>
          <div>
            <Image src={image5} alt="image1" />
          </div>
          <div>
            <Image src={image6} alt="image1" />
          </div>
        </Flex>
        </div>
        
      </Container>
    </section>
  );
};

export default Hero;
