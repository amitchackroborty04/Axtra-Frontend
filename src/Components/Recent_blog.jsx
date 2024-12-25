import React from 'react'
import { Container } from './Container'
import Primary_text from './Primary_text'
import Image from './Image'
import image1 from "../assets/images/recent1.jpg";
import image2 from "../assets/images/recent2.jpg";
import Flex from './Flex';
import { MdArrowOutward } from 'react-icons/md';

const Recent_blog = () => {
  return (
    <section >
        <Container>
        <div className="w-full lg:w-[700px] mx-auto  py-[100px]">
          <h4 className="text-[18px] text-center font-normal leading-5 text-[rgb(85,85,85)] uppercase">
           Recent uplode
          </h4>
          <h2 className="text-[30px] lg:text-[60px] text-center lg:text-left font-bold leading-[40px] lg:leading-[60px] text-[rgb(18,18,18)] uppercase mt-10">
          Read Updated
          </h2>
          <h2 className="text-[30px] lg:text-[60px] text-center lg:text-left font-bold leading-[40px] lg:leading-[60px] text-[rgb(18,18,18)] uppercase">
          Journal
          </h2>
          <div className="mt-[50px] lg:mt-[100px] flex justify-end relative">
            <div className="absolute top-[-36px] left-[268px] border border-[#bcaeae] h-[200px] hidden lg:block "></div>
            <Primary_text
              className="w-full lg:w-[410px] "
              text="Consumers today rely heavily on digital means toresearch products. We research a brand of bldendengaging with it, according to the meanwhile, 51%of consumers say they use Google to researchproducts before buying."
            />
          </div>
        </div>
        <Flex className="w-full lg:w-[1360px] mx-auto mt-14  pb-[100px] flex-wrap lg:flex-nowrap">
            <div className='w-full lg:w-[50%]'>
                <div className='relative'>
                <Image src={image1} alt="image1"/>
                <div className='static lg:absolute bottom-0 right-16 w-full lg:w-[400px] bg-white  py-10 px-5'>
                    <p className='text-[15px] font-normal leading-4 text-[rgb(18,18,18)]'>UI Design . 02 May 2019</p>
                    <h5 className='text-[26px] font-medium leading-7 text-[rgb(33,32,32)] w-full lg:w-[320px] border-b border-black pb-10 mt-10 shadow-sm '>How to bring fold to your startup company with Axtra</h5>
                    <Flex className="items-center gap-x-3 mt-4">
                        <p className='text-base font-normal leading-4 text-[rgb(18,18,18)]'>Read More</p>
                        <span>
                        <MdArrowOutward />
                        </span>
                    </Flex>
                </div>
                </div>
            </div>
            <div className='w-full lg:w-[50%]'>
                <div className='relative'>
                <Image src={image2} alt="image2"/>
                <div className=' static lg:absolute bottom-0 right-16 w-full lg:w-[400px] bg-white  py-10 px-5'>
                    <p className='text-[15px] font-normal leading-4 text-[rgb(18,18,18)]'>UI Design . 02 May 2019</p>
                    <h5 className='text-[26px] font-medium leading-7 text-[rgb(33,32,32)] w-[320px] border-b border-black pb-10 mt-10 shadow-sm '>How to bring fold to your startup company with Axtra</h5>
                    <Flex className="items-center gap-x-3 mt-4">
                        <p className='text-base font-normal leading-4 text-[rgb(18,18,18)]'>Read More</p>
                        <span>
                        <MdArrowOutward />
                        </span>
                    </Flex>
                </div>
                </div>
            </div>
        </Flex>
        </Container>
    </section>
  )
}

export default Recent_blog