import React from "react";
import DateToggle from "../components/dashboard/DateToggle";
import DateSelecter from "../components/dashboard/DateSelecter";

const dummyData = {
  numOfPaidInvoice: "324",
  valueOfpaidInvoice: "2705.96",
  invoiceCreate: "342",
  numOfCustomers: "971",
  valueOfTrancations: "857",
  expiringInvoices: "15"
};

const Dashboard = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => setData(dummyData), []);

  return (
    <div className="grid gap-5">
      <div className="flex justify-end gap-3">
        <DateToggle />
        <DateSelecter />
      </div>
      <div className="grid grid-cols-7 gap-10">
        <div className="col-span-3">
          <div className="bg-[#2196f3] bg-gradient-to-l py-10 px-5 text-white rounded-md shadow-xl">
            <div className="flex flex-col gap-2">
              <p className="text-md font-semibold">Number of Paid invoices</p>
              <p className="text-4xl font-bold">{data?.numOfPaidInvoice}</p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <p className="text-md font-semibold">Value of Paid invoices</p>
              <p className="text-4xl font-bold">{data?.valueOfpaidInvoice}</p>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-2 gap-9 text-[#212121]">
            <div className="flex flex-col gap-3 rounded-md px-3 py-5 bg-white shadow-xl">
              <p className="text-sm font-semibold">Invoice Creates</p>
              <p className="text-2xl font-bold">{data?.invoiceCreate}</p>
            </div>
            <div className="flex flex-col gap-3 rounded-md px-3 py-5 bg-white shadow-xl">
              <p className="text-sm font-semibold">Number of Customers</p>
              <p className="text-2xl font-bold">{data?.numOfCustomers}</p>
            </div>
            <div className="flex flex-col gap-3 rounded-md px-3 py-5 bg-white shadow-xl">
              <p className="text-sm font-semibold">Value Transactions</p>
              <p className="text-2xl font-bold">{data?.valueOfTrancations}</p>
            </div>
            <div className="flex flex-col gap-3 rounded-md px-3 py-5 bg-white shadow-xl">
              <p className="text-sm font-semibold">Expiring Invoices</p>
              <p className="text-2xl font-bold">{data?.expiringInvoices}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
