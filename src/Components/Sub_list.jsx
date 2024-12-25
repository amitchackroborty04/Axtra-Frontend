import React from "react";
import Flex from "./Flex";
import Sub_list_title from "./Sub_list_title";
import Sub_list_content from "./Sub_list_content";

const Sub_list = ({className}) => {
  return (
    <div className=" absolute top-full left-0 w-full lg:w-[900px] bg-black hidden group-hover:block duration-500 p-10 cursor-pointer z-40" >
      <Flex className="justify-between">
        <div className="w-[48p%]">
            <Sub_list_title sub_list_title="Agency"/>
            <Sub_list_content sub_list_content_title="Digital Marketing"/>
            <Sub_list_content sub_list_content_title="design studio"/>
            <Sub_list_content sub_list_content_title="Digital agency"/>
            <Sub_list_content sub_list_content_title="creative agency"/>
            <Sub_list_content sub_list_content_title="Digital Marketing"/>
            <Sub_list_content sub_list_content_title="Digital Marketing"/>
            <Sub_list_content sub_list_content_title="Digital Marketing"/>
        </div>
        <div className="w-[48%]">
        <Sub_list_title sub_list_title="Agency dark"/>
            <Sub_list_content sub_list_content_title="Digital Marketing"/>
            <Sub_list_content sub_list_content_title="Digital studio"/>
            <Sub_list_content sub_list_content_title="Digital agency"/>
            <Sub_list_content sub_list_content_title="creative agency"/>
            <Sub_list_content sub_list_content_title="Digital Marketing"/>
            <Sub_list_content sub_list_content_title="Digital Marketing"/>
            <Sub_list_content sub_list_content_title="Digital Marketing"/>
        </div>
      </Flex>
    </div>
  );
};

export default Sub_list;
