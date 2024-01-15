import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";

const DateSelecter = () => {
  return (
    <div className="flex rounded-md px-2 py-1 bg-white justify-center items-center gap-2">
      <div className='text-[#29b6f6] font-semibold flex justify-center items-center gap-1'>
        Date 
        <MdOutlineDateRange color='text-[#29b6f6]' />
      </div>
    </div>
  );
}

export default DateSelecter
