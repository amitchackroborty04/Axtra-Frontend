import React, { useState } from "react";
import { Container } from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import logo from "../assets/images/logo.png";
import List_item from "./List_item";
import List from "./List";
import { IoSearch } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import Sub_list from "./Sub_list";
import Sub_list_title from "./Sub_list_title";
import Sub_list_content from "./Sub_list_content";
import { RxCross2 } from "react-icons/rx";

const Heders = () => {
  let [menu, setMenu] =useState(false);

  let handlemenu=()=>{
    setMenu(!menu)
  }
  return (
    <header>
      <Container>
        <Flex className="justify-between items-center py-[20px] border-b  ">
          <div className="">
            <Image src={logo} alt={logo} />
          </div>

          <nav className="">
            <List className={`absolute top-0 ${menu ? "right-0" : "right-[-100%]"} w-[100%] lg:w-auto gap-y-10 py-10  bg-white lg:bg-transparent lg:static flex flex-col lg:flex-row justify-between cursor-pointer duration-500 z-50 rleative `}>
              <span className="absolute top-5 right-5 cursor-pointer">
              <RxCross2 onClick={()=>setMenu(false)} className="text-2xl text-red-500" />
              </span>
              <div className="relative group">
                <List_item className="px-10" item_name="Home" />
                <Sub_list />
              </div>
              <List_item className="px-10" item_name="about" />
              <div className=" group">
                <List_item className="px-10 " item_name="pages" />
                <div className=" absolute   left-0 hidden group-hover:block  w-full bg-black  duraqtion-500 z-50">
                  <Flex className=" justify-evenly flex-wrap lg:flex-nowrap">
                    <div className="w-[32%] lg:w-[15%] p-10">
                      <Sub_list_title sub_list_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                    </div>
                    <div className="w-[32%] lg:w-[15%] p-10">
                      <Sub_list_title sub_list_title="protfolio" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                    </div>
                    <div className="w-[32%] lg:w-[15%] p-10">
                      <Sub_list_title sub_list_title="team" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                    </div>
                    <div className="w-[32%] lg:w-[15%] p-10">
                      <Sub_list_title sub_list_title="blog" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content lg:ent sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                    </div>
                    <div className="w-[32%] lg:w-[15%] p-10">
                      <Sub_list_title sub_list_title="other" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                      <Sub_list_content sub_list_content_title="services" />
                    </div>
                  </Flex>
                </div>
              </div>
              <div className="relative group">
                <List_item className="px-10" item_name="services" />
                <div className=" absolute top-full left-0 hidden group-hover:block w-full  lg:w-[300px] bg-black  duraqtion-500 p-4 z-50">
                 
                    <Sub_list_content sub_list_content_title="services" />
                  <Sub_list_content sub_list_content_title="services V2" />
                  <Sub_list_content sub_list_content_title="services V3" />
                  <Sub_list_content sub_list_content_title="services V4" />
                  <Sub_list_content sub_list_content_title="services V5" />
                  <Sub_list_content sub_list_content_title="services V6" />
                </div>
              </div>
              <div className="relative group">
                <List_item className="px-10" item_name="team" />
                <div className="absolute top-full left-0 hidden group-hover:block  w-[300px] bg-black  duraqtion-500 p-4 z-50">
                  <Sub_list_content sub_list_content_title="team " />
                  <Sub_list_content sub_list_content_title="team details" />
                </div>
              </div>
              <div className="relative group">
                <List_item className="px-10" item_name="blog" />
                <div className="absolute top-full left-0 hidden group-hover:block  w-[300px] bg-black  duraqtion-500 p-4 z-50">
                  <Sub_list_content sub_list_content_title="blog " />
                  <Sub_list_content sub_list_content_title="blog 2 " />
                  <Sub_list_content sub_list_content_title="category " />
                  <Sub_list_content sub_list_content_title="blog details " />
                </div>
              </div>
              <List_item className="px-10" item_name="contact" />
            </List>
          </nav>

          <Flex className="gap-10">
            <span>
              <IoSearch className="text-2xl" />
            </span>
            <span>
              <CgMenuRight onClick={handlemenu} className="text-2xl " />
            </span>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Heders;
