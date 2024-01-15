import React from "react";
import DateToggle from "../components/dashboard/DateToggle";
import DateSelecter from "../components/dashboard/DateSelecter";
import { RiNewspaperFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";

const dummyData = {
  numOfPaidInvoice: "324",
  valueOfpaidInvoice: "2705.96",
  invoiceCreate: "342",
  numOfCustomers: "971",
  valueOfTrancations: "857",
  expiringInvoices: "15",
  todaysTableData: [],
};

const Dashboard = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => setData(dummyData), []);

  return (
    <div className="grid gap-4">
      <div className="flex justify-end gap-1">
        <DateToggle />
        <DateSelecter />
      </div>
      <div className="grid md:grid-cols-7 gap-5">
        <div className="md:col-span-3">
          <div className="bg-[#29b6f6] bg-gradient-to-l py-10 px-5 text-white rounded-md shadow-xl">
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
        <div className="md:col-span-4">
          <div className="grid sm:grid-cols-2 gap-5 text-[#212121]">
            <div className="flex flex-col gap-3 rounded-md px-3 py-6 bg-white shadow-xl">
              <p className="text-sm font-semibold">Invoice Creates</p>
              <p className="text-2xl font-bold">{data?.invoiceCreate}</p>
            </div>
            <div className="flex flex-col gap-3 rounded-md px-3 py-6 bg-white shadow-xl">
              <p className="text-sm font-semibold">Number of Customers</p>
              <p className="text-2xl font-bold">{data?.numOfCustomers}</p>
            </div>
            <div className="flex flex-col gap-3 rounded-md px-3 py-6 bg-white shadow-xl">
              <p className="text-sm font-semibold">Value Transactions</p>
              <p className="text-2xl font-bold">{data?.valueOfTrancations}</p>
            </div>
            <div className="flex flex-col gap-3 rounded-md px-3 py-6 bg-white shadow-xl">
              <p className="text-sm font-semibold">Expiring Invoices</p>
              <p className="text-2xl font-bold">{data?.expiringInvoices}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-5">
        <button className="bg-[#03a9f4] bg-gradient-to-l text-white font-semibold px-2 py-3 flex justify-center items-center gap-2 rounded-md">
          Create Invoice <RiNewspaperFill size={26} />
        </button>
        <button className="bg-[#03a9f4] bg-gradient-to-l capitalize text-white font-semibold px-2 py-3 flex justify-center items-center gap-2 rounded-md">
          Add Customers <HiUsers size={26} />
        </button>
      </div>
      <div className="flex items-center gap-10">
        <div className="bg-white p-3 rounded-md flex flex-col">
          <p className="text-[#29b6f6] text-lg font-semibold">
            Today's Invoice
          </p>
          <div class="overflow-x-auto mt-1">
            <table class="table-auto min-w-full">
              <thead>
                <tr className="bg-[#eeeeee] text-[12px]">
                  <th class="px-7 py-1 font-normal">Payment Ref</th>
                  <th class="px-7 py-1 font-normal">Invoice Value</th>
                  <th class="px-7 py-1 font-normal">Invoice Status</th>
                </tr>
              </thead>
              <tbody>
                {data.todaysTableData?.map((data, index) => (
                  <tr key={index} className="">
                    <td class=" px-7 py-1 text-center">{data?.paymentRef}</td>
                    <td class=" px-7 py-1 text-center">{data?.invoiceValue}</td>
                    <td class=" px-7 py-1 text-center">
                      {data?.invoiceStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data?.todaysTableData && (
              <div className="py-2 w-full flex justify-center items-center border-b border-black">
                No data
              </div>
            )}
          </div>
        </div>
        <div className="bg-white p-3 rounded-md flex flex-col">
          <p className="text-[#29b6f6] text-lg font-semibold">
            Today's Paid Invoice
          </p>
          <div class="overflow-x-auto mt-1">
            <table class="table-auto min-w-full">
              <thead>
                <tr className="bg-[#eeeeee] text-[12px]">
                  <th class="px-7 py-1 font-normal">Payment Ref</th>
                  <th class="px-7 py-1 font-normal">Invoice Value</th>
                  <th class="px-7 py-1 font-normal">Commission</th>
                  <th class="px-7 py-1 font-normal">Transaction ID</th>
                </tr>
              </thead>
              <tbody>
                {data.todaysTableData?.map((data, index) => (
                  <tr key={index} className="">
                    <td class=" px-7 py-1 text-center">{data?.paymentRef}</td>
                    <td class=" px-7 py-1 text-center">{data?.commission}</td>
                    <td class=" px-7 py-1 text-center">
                      {data?.invoiceStatus}
                    </td>
                    <td class=" px-7 py-1 text-center">
                      {data?.transactionId}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data?.todaysTableData && (
              <div className="py-2 w-full flex justify-center items-center border-b border-black">
                No data
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
