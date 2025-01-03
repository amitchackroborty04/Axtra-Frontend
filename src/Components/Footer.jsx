import React from "react";
import { Container } from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import footerlogo from "../assets/images/footerlogo.png";
import Footer_item from "./Footer_item";
import List from "./List";
import List_item from "./List_item";

const Footer = () => {
  return (
    <footer className="bg-black  ">
      <Container>
        <Flex className="border-b border-[rgba(153,153,153)]  flex-wrap lg:flex-nowrap gap-y-10 ">
          <div className="w-full lg:w-[30%] border-none lg:border-r  border-[rgba(153,153,153)] pt-[120px]">
            <Image src={footerlogo} alt="footerlogo" />
            <p className="texr-base font-normal text-[rgba(153,153,153)] mt-10">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </p>
          </div>
          <div className="w-full lg:w-[10%]">
            <Footer_item content=" Facebook" />
            <Footer_item content=" twitter" />
            <Footer_item content=" linkedin" />
            <Footer_item content=" instagram" />
          </div>
          <div className="w-full lg:w-[50%] pt-[80px]">
            <h3 className="text-[40px] lg:text-[80px] font-bold text-white uppercase text-center ">
              Let's talk
            </h3>
          </div>
        </Flex>
        <Flex className="justify-between items-center py-10 flex-col lg:flex-row gap-y-10 ">
          <div className="w-full lg:w-[20%]">
            <p className="  text-white text-[10px] lg:text-base">
              © 2022 - 2025 | Alrights reserved by Wealcoder
            </p>
          </div>

          <div className="w-full  lg:w-[40%] ">\
            <ul className="flex gap-x-10">
              <li className="text-sm lg:text-[24px] text-white  uppercase">about</li>
              <li className="text-sm lg:text-[24px] text-white  uppercase">contact</li>
              <li className="text-sm lg:text-[24px] text-white  uppercase">career</li>
              <li className="text-sm lg:text-[24px] text-white  uppercase">faq</li>
            </ul>
           
          </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
