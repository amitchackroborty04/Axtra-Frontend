import React from "react";
import { Container } from "./Container";
import Flex from "./Flex";
import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { Primary_Button } from "./Primary_Button";

const Pricing_Table = () => {
  return (
    <section className="bg-[#F3ECEC]">
      <Container>
        <div className="w-full lg:max-w-[1360px] mx-auto">
          <Flex className="justify-between  py-[100px] flex-wrap lg:flex-nowrap gap-y-10">
            <div className="w-full lg:w-[45%]">
              <h4 className="text-[18px] text-center lg:text-left font-normal leading-8 text-[rgb(85,85,85)]">
                Pricing Table
              </h4>
              <h2 className="text-[30px] lg:text-[60px] text-center lg:text-left font-bold leading-[30px] lg:leading-[60px] text-[rgb(18,18,18)] uppercase mt-7">
                Be kind to your
              </h2>
              <h2 className="text-[30px] lg:text-[60px] text-center lg:text-left font-bold leading-[30px] lg:leading-[60px] text-[rgb(18,18,18)] uppercase mt-7">
                {" "}
                mind
              </h2>
              <Flex className="justify-between items-center border-b border-t border-black py-5 mt-[80px]">
                <div>
                  <p className="text-[18px] font-medium leading-7 text-[rgb(18,18,18)]">
                    Design should enrich our day
                  </p>
                </div>
                <span>
                  <FiPlus />
                </span>
              </Flex>
              <Flex className="justify-between items-center border-b  border-black py-5 ">
                <div>
                  <p className="text-[18px] font-medium leading-7 text-[rgb(18,18,18)]">
                    Design should enrich our day
                  </p>
                </div>
                <span>
                  <FiPlus />
                </span>
              </Flex>
              <Flex className="justify-between items-center border-b  border-black py-5 ">
                <div>
                  <p className="text-[18px] font-medium leading-7 text-[rgb(18,18,18)]">
                    Design should enrich our day
                  </p>
                </div>
                <span>
                  <FiPlus />
                </span>
              </Flex>
              <Flex className="justify-between items-center border-b  border-black py-5 ">
                <div>
                  <p className="text-[18px] font-medium leading-7 text-[rgb(18,18,18)]">
                    Design should enrich our day
                  </p>
                </div>
                <span>
                  <FiPlus />
                </span>
              </Flex>
              <Flex className="justify-between items-center border-b  border-black py-5 ">
                <div>
                  <p className="text-[18px] font-medium leading-7 text-[rgb(18,18,18)]">
                    Design should enrich our day
                  </p>
                </div>
                <span>
                  <FiPlus />
                </span>
              </Flex>
            </div>

            <div className="w-full lg:w-[53%] ">
              <Flex className="justify-between  items-center bg-black py-14 rounded-lg pl-[80px] lg:pl-[100px] pr-5 lg:pr-10 relative">
              <div className="absolute top-[-20px] right-10">
                  <p className="text-[12px] leading-5 font-normal uppercase text-gray-300 border border-white py-2 px-3 rounded-[5px] inline-block bg-[#FF9776] ">best valu</p>
                </div>
                <div className=" absolute top-[50%] left-5 translate-y-[-50%]">
                  <div className=" w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] bg-[#FF9776] rounded-[8px] relative ">
                    <span className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      <FaCheck />
                    </span>
                  </div>
                </div>
               
                <div>
                  <h6 className="text-[12px] leading-5 font-normal uppercase text-gray-300 border border-white py-3 px-3 rounded-[30px] inline-block ">
                    Yearly
                  </h6>
                  <h3 className="text-base lg:text-[28px] font-medium leading-7 text-white mt-6">
                    14 days free
                  </h3>
                  <p className="w-full lg:w-[364px] mt-6 text-[12px] lg:text-[16px] font-medium leading-7 text-gray-300">
                    Subscription fee is $129.99 USD and automatically renews
                    each year.
                  </p>
                </div>
                <div>
                  <p className="text-base lg:text-[36px] font-bold leading-[36px] text-white">
                    $122
                    <span className="text-sm lg:text-[18px]">.99</span>
                  </p>
                </div>
              </Flex>
              <Flex className="justify-between  items-center bg-white py-14 rounded-lg pl-[80px] lg:pl-[100px] pr-5 lg:pr-10 relative mt-10">
                <div className=" absolute top-[50%] left-5 translate-y-[-50%]">
                  <div className=" w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] bg-[#ffff] border border-black rounded-[8px] relative ">
                    <span className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      <FaCheck />
                    </span>
                  </div>
                </div>
                <div>
                  <h6 className="text-[12px] leading-5 font-normal uppercase text-black border border-black py-3 px-3 rounded-[30px] inline-block ">
                    Yearly
                  </h6>
                  <h3 className="text-base lg:text-[28px] font-medium leading-7 text-black mt-6">
                    7 days free
                  </h3>
                  <p className="w-full lg:w-[364px] mt-6 text-[12px] lg:text-[16px] font-medium leading-7 text-black">
                    Subscription fee is $129.99 USD and automatically renews
                    each year.
                  </p>
                </div>
                <div>
                  <p className="text-base lg:text-[36px] font-bold leading-[36px] text-black">
                    $122
                    <span className="text-sm lg:text-[18px]">.99</span>
                  </p>
                </div>
              </Flex>
              <div className="mt-16 flex justify-center lg:justify-start">
                <Primary_Button  border_color="border-black"/>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Pricing_Table;
