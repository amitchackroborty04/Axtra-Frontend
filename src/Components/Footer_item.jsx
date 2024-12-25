import React from 'react'

const Footer_item = ({content}) => {
  return (
    <p className="text-base font-bold text-[rgba(255,255,255)] uppercase py-7   border border-[rgba(153,153,153)] text-center hover:bg-white duration-500 hover:text-black ">
   {content}
  </p>
  )
}

export default Footer_item