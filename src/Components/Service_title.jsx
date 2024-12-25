import React from "react";

const Service_title = ({content,sub_content}) => {
  return <h4 className=" text-[25px] lg:text-[36px] font-normal leading-8 text-[rgb(18,18,18)]">{content} <br /> {sub_content}</h4>;
};

export default Service_title;
