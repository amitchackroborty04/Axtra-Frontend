import React from 'react'

const Service_text = ({className,content}) => {
  return (
    <p className={` ${className} text-[18px] font-medium leading-5 text-[rg(18,18,18)]`}>{content}</p>
  )
}

export default Service_text