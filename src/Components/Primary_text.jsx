import React from 'react'

const Primary_text = ({text,className}) => {
  return (
    <p className={`text-[18px] text-[#555555] text-center lg:text-left ${className}` } >{text}</p>
  )
}

export default Primary_text