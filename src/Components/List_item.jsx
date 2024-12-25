
import React from 'react'

const List_item = ({item_name, className}) => {
  return (
   <li className={`text-base font-normal text-[#121212] uppercase ${className}`}>
    {item_name}
   </li>
  )
}

export default List_item