import React from "react";

const Sub_list_content = ({sub_list_content_title}) => {
  return (
    <div className="w-full py-[10px] px-3">
      <h3 className=" text-base font-normal leading-6 tracking-normal  hover:tracking-widest duration-500 text-white ">{sub_list_content_title}</h3>
    </div>
  );
};

export default Sub_list_content;
