import React from "react";
import { Container } from "./Container";
import Primary_text from "./Primary_text";
import Flex from "./Flex";
import Service_title from "./Service_title";
import Service_text from "./Service_text";
import { Primary_Button } from "./Primary_Button";
import Service_sub_tex from "./Service_sub_tex";

const Services = () => {
  return (
    <section>
      <Container>
        <div className="w-full lg:w-[700px] mx-auto  py-[100px]">
          <h4 className="text-[18px] text-center font-normal leading-5 text-[rgb(85,85,85)]">
            Services
          </h4>
          <h2 className="text-[30px] lg:text-[60px] text-center lg:text-left font-bold leading-[40px] lg:leading-[60px] text-[rgb(18,18,18)] mt-10">
            Our marketing
          </h2>
          <h2 className="text-[30px] lg:text-[60px] text-center lg:text-left font-bold leading-[40px] lg:leading-[60px] text-[rgb(18,18,18)]">
            services
          </h2>
          <div className="mt-[50px] lg:mt-[100px] flex justify-end relative">
            <div className="absolute top-[-36px] left-[268px] border border-[#bcaeae] h-[200px] hidden lg:block "></div>
            <Primary_text
              className="w-full lg:w-[410px] "
              text="Consumers today rely heavily on digital means toresearch products. We research a brand of bldendengaging with it, according to the meanwhile, 51%of consumers say they use Google to researchproducts before buying."
            />
          </div>
        </div>
        <Flex className="flex-col lg:flex-row mt-10 justify-between w-full lg:max-w-[1296px] mx-auto border-t pt-14 gap-y-10">
            <div className="flex justify-center lg:justify-start">
                <Service_title content="Search Engine" sub_content="Optimization" />
            </div>
            <div className="text-center lg:text-left">
                <Service_text className="w-auto lg:w-[340px]" content="We help brands stand out through aweful, elegant visual design. Our design mainly philosophy"/>
                <Service_sub_tex className='mt-10'/>
                <Service_sub_tex className='mt-3'/>
                <Service_sub_tex className='mt-3'/>
               
            </div>
            <div className="flex justify-center lg:justify-start">
                <Primary_Button text_color="text-[rgb(18,18,18)]" border_color="border-[#dfd9d9]"/>
            </div>
        </Flex>
        <Flex className="flex-col lg:flex-row mt-10 justify-between w-full lg:max-w-[1296px] mx-auto border-t pt-14 gap-y-10">
            <div className="flex justify-center lg:justify-start">
                <Service_title content="Search Engine" sub_content="Optimization" />
            </div>
            <div className="text-center lg:text-left">
                <Service_text className="w-auto lg:w-[340px]" content="We help brands stand out through aweful, elegant visual design. Our design mainly philosophy"/>
                <Service_sub_tex className='mt-10'/>
                <Service_sub_tex className='mt-3'/>
                <Service_sub_tex className='mt-3'/>
               
            </div>
            <div className="flex justify-center lg:justify-start">
                <Primary_Button text_color="text-[rgb(18,18,18)]" border_color="border-[#dfd9d9]"/>
            </div>
        </Flex>
        <Flex className="flex-col lg:flex-row mt-10 justify-between w-full lg:max-w-[1296px] mx-auto border-t pt-14 gap-y-10">
            <div className="flex justify-center lg:justify-start">
                <Service_title content="Search Engine" sub_content="Optimization" />
            </div>
            <div className="text-center lg:text-left">
                <Service_text className="w-auto lg:w-[340px]" content="We help brands stand out through aweful, elegant visual design. Our design mainly philosophy"/>
                <Service_sub_tex className='mt-10'/>
                <Service_sub_tex className='mt-3'/>
                <Service_sub_tex className='mt-3'/>
               
            </div>
            <div className="flex justify-center lg:justify-start">
                <Primary_Button text_color="text-[rgb(18,18,18)]" border_color="border-[#dfd9d9]"/>
            </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Services;
