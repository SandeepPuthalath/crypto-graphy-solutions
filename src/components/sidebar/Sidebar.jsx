import React from "react";
import Logo from "../logo/Logo";
import LogoutButton from "./LogoutButton";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaUser, FaUsers } from "react-icons/fa";
import { RiNewspaperFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const listData = [
  { name: "dashboard", icon: HiBars3BottomRight, path: "/" },
  { name: "profile", icon: FaUser, path: "profile" },
  {
    name: "invoice",
    icon: RiNewspaperFill,
    moreIcon: IoMdArrowDropright,
    path: "invoice",
  },
  { name: "customers", icon: HiUsers, path: "customers" },
  { name: "users", icon: FaUsers, path: "users" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [selected, setSeleted] = React.useState(0);
  
  const handleNavigation = React.useCallback((path, index) => {
    setSeleted(index)
    navigate(path);
  }, [navigate]);

  return (
    <div className="h-full flex flex-col">
      <Logo />
      <div className="py-5 flex flex-col h-full justify-between">
        <div className="">
          <ul className="pr-1 flex flex-col">
            {listData.map((data, index) => (
              <li
                onClick={() => handleNavigation(data?.path, index)}
                className={`px-5 py-2 ${
                  selected === index
                    ? "bg-[#b3e5fc] border-[#29b6f6] text-[#29b6f6]"
                    : "border-transparent text-[#9e9e9e]"
                } hover:bg-[#b3e5fc] hover:border-[#29b6f6] hover:text-[#29b6f6] border-l-4  flex items-center justify-between font-bold  cursor-pointer rounded-br-full`}
                key={index}
              >
                <div className="flex items-center gap-5 capitalize">
                  <data.icon size={20} />
                  {data?.name}
                </div>
                {data?.name === "invoice" && (
                  <data.moreIcon className="cursor-pointer" size={20} />
                )}
              </li>
            ))}
          </ul>
        </div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
