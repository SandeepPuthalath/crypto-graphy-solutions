import React from "react";
const data = "90,472.00";
const WalletBalance = () => {
  const [walletBalance, setWalletBalance] = React.useState("");
  React.useEffect(() => setWalletBalance(data), []);
  
  return (
    <div className="text-center text-[#424242]">
      <p className="capitalize text-[10px] font-semibold">Wallet Balance</p>
      <p className="capitalize text-[10px] font-semibold">{walletBalance}</p>
    </div>
  );
};

export default WalletBalance;
