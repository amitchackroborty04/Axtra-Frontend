import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const Primary_Button = ({text_color,border_color}) => {
  return (
    <button className={`flex items-center justify-center gap-1  lga:gap-2 w-[100px] lg:w-[200px] h-[100px] lg:h-[200px] rounded-full text-[10px] lg:text-xl border ${border_color} uppercase  ${text_color}`}>
      contact us
      <MdArrowOutward className="text-base lg:text-2xl " />
    </button>
  );
};
