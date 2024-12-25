import React from 'react'
import { FiPlus } from 'react-icons/fi'

const Service_sub_tex = ({className}) => {
  return (
    <div className={`flex gap-2 items-center justify-center lg:justify-start ${className}`}>
        <span>
        <FiPlus />
        </span>
       <p className='text-[18px] font-medium leading-5 text-[rgb(18,18,18)] '>Logo Design</p>
    </div>
  )
}

export default Service_sub_tex