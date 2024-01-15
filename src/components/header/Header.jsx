import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaBell } from "react-icons/fa6";
import AccountComp from "./AccountComp";
import WalletBalance from "./WalletBalance";

const data = [
  {
    id: 1,
    type: "payment",
    message: "This is dummy data",
  },
];

const Header = ({ handleToggleSidebar }) => {
  const [notification, setNotifications] = React.useState([]);

  React.useEffect(() => {
    setNotifications(data);
  }, []);

  return (
    <div className="bg-white w-full py-2 px-4 flex justify-between items-center shadow-sm">
      <div className="flex justify-center items-center gap-5">
        <button onClick={handleToggleSidebar}>
          <HiBars3BottomRight color="#29b6f6" size={35} />
        </button>
        <span
          style={{ color: "#29b6f6" }}
          className="text-2xl uppercase font-bold block md:visible"
        >
          dashboard
        </span>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="relative cursor-pointer">
          <FaBell color="#757575" size={25} />
          {notification.length > 0 && (
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
          )}
        </div>
        <WalletBalance />
        <AccountComp />
      </div>
    </div>
  );
};

export default Header;
