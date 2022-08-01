import React from "react";

const BillsReceivable = () => {
  const tableData = [
    {
      date: "1-Jul-2020",
      name: "Md Traders",
      ref: 1,
      amount: "1,00,000.00",
    },
    {
      date: "1-Jul-2020",
      name: "Samir Kalakheti",
      ref: 2,
      amount: "10,000.00",
    },
    {
      date: "1-Jul-2020",
      name: "Abc",
      ref: 3,
      amount: "1,000.00",
    },
  ];
  return (
    <div className="mt-12 px-4">
      <div className="grid  bg-gray-50 p-4">
        {/* Head */}
        <div>
          <div className="flex justify-between items-center px-2 bg-sky-300 font-semibold">
            <span>Bills Receivable</span>
            <span>Robin Liqours</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center pt-4 px-2 font-medium ">
            <h1>
              Group : <span className="font-bold text-sm">All Items</span>
            </h1>
            <h1>For 1-Jul-2020</h1>
          </div>
        </div>

        {/* Particulars */}
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table className="min-w-full">
                  <thead className="">
                    <tr className="border-y-2 border-gray-400 ">
                      <th className="text-right pr-2 ">Date</th>
                      <th className=" text-left font-normal">Ref No.</th>
                      <th className=" w-3/5 pl-40 text-left">Party's Name</th>
                      <th className=" text-right">Pending Amount</th>
                      <th className="text-right font-normal">Due on</th>
                      <th className="text-right italic font-normal w-16">
                        Overdue by days
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {tableData.length > 0 &&
                      tableData.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td className="font-medium">{item.date}</td>
                            <td>{item.ref}</td>
                            <td className="text-left pl-36 font-medium">
                              {item.name}
                            </td>
                            <td className="text-right font-medium">
                              {item.amount}
                            </td>
                            <td className="text-right "></td>
                            <td className="text-right italic font-medium w-16"></td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsReceivable;
