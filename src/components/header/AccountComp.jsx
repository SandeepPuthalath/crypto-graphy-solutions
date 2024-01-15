import React from "react";

const data = {
  id: 1,
  name: "Sara john",
  img: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

const AccountComp = () => {
  const [profileData, setProfileData] = React.useState({});

  React.useEffect(() => setProfileData(data),[]);

  return (
    <button className="block w-10 h-10 cursor-pointer border border-[#29b6f6] focus:border-slate-700  rounded-full">
      <img
        src={profileData?.img}
        className="rounded-full object-cover"
        alt="img"
      />
    </button>
  );
};

export default AccountComp;
