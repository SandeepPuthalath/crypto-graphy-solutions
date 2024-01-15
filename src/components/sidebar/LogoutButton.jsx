import React from 'react'
import { FaPowerOff } from "react-icons/fa";

const LogoutButton = () => {
  return (
    <div className="flex justify-center items-center">
      <button className="bg-[29b6f6] flex justify-center items-center gap-2 text-md px-10 py-2 text-white rounded-md font-bold ">
        <FaPowerOff />
        Log Out
      </button>
    </div>
  );
}

export default LogoutButton
