import React from "react";
import { Container } from "./Container";
import Image from "./Image";
import quote from "../assets/images/quote.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/images/comment1.jpg";
import image2 from "../assets/images/comment2.jpg";
import image3 from "../assets/images/comment3.jpg";
import image4 from "../assets/images/comment4.jpg";
import image5 from "../assets/images/comment5.jpg";
import image6 from "../assets/images/comment6.jpg";
import Flex from "./Flex";

const Comitment = () => {
  return (
    <section>
      <Container>
        <div className="w-full lg:w-[660px] mx-auto pt-[100px] relative pb-5 lg:pb-[100px]">
            <Flex className="justify-between j flex-col lg:flex-row gap-y-10">
                <div className="flex justify-center lg:justify-start">
                    <Image src={image1} alt="image1" />
                </div>
                <div className="flex justify-center lg:justify-end">
                    <Image src={image2} alt="image2" />
                </div> 
            </Flex>
            <div className=" absolute top-[475px] left-[-340px] hidden lg:block">
                <Image src={image3} alt="image3" />
            </div>
            <div className=" absolute top-[675px] left-[-340px] hidden lg:block">
                <Image src={image4} alt="image4" />
            </div>
            <div className=" absolute top-[475px] right-[-290px] hidden lg:block">
                <Image src={image5} alt="image5" />
            </div>
            <div className=" absolute top-[675px] right-[-100px] hidden lg:block">
                <Image src={image6} alt="image6" />
            </div>
          <div className="flex justify-center pt-[100px]">
            <Image src={quote} alt="quote" />
          </div>
          <h4 className="text-[24px] text-center lg:text-left  font-normal leading-8 text-[rgb(18,18,18)] mt-10">
            When we talk about Alts, we do not mean a typical business partner,
            but rather a team that collaborates with us daily, always there for
            us when we encounter difficulties and celebrate achievements. We see
            in Alts our best ally for success!
          </h4>
          <h2 className="text-[28px] font-medium text-black uppercase text-center mt-10">
            Maria D. Halk
          </h2>
          <h6 className="text-[14px] font-medium text-black uppercase text-center mt-5">
            Managing Director
          </h6>
          <div className="flex justify-center gap-7 mt-[100px]">
            <div className="w-[50px] h-[50px] rounded-full border border-black relative hover:bg-black group ">
                <span className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:text-white duration-300">
                <FaArrowLeft />
                </span>
            </div>
            <div className="w-[50px] h-[50px] rounded-full border border-black relative hover:bg-black group ">
                <span className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:text-white duration-300">
                <FaArrowRight />
                </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Comitment;
