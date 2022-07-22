import React from "react";

const SalesPurchaseAndJournal = () => {
  const tableData = [
    {
      date: "1-Jul-2020",
      name: "Samir Kalakheti",
      vType: "Payment",
      vNo: 1,
      debit: "1,00,000.00",
      credit: "",
    },
    {
      date: "1-Jul-2020",
      name: "Paris Kalakheti",
      vType: "Payment",
      vNo: 2,
      debit: "10,000.00",
      credit: "",
    },
    {
      date: "1-Jul-2020",
      name: "Samir Kalakheti",
      vType: "Payment",
      vNo: 3,
      debit: "1,000.00",
      credit: "",
    },
    {
      date: "1-Jul-2020",
      name: "Samir Kalakheti",
      vType: "Receipt",
      vNo: 1,
      debit: "",
      credit: "10,000.00",
    },
    {
      date: "1-Jul-2020",
      name: "Abc",
      vType: "Journal",
      vNo: 1,
      debit: "5,000.00",
      credit: "",
    },
    {
      date: "1-Jul-2020",
      name: "Samir Kalakheti",
      vType: "Sales",
      vNo: 2,
      debit: "28,250.00",
      credit: "",
    },
    {
      date: "1-Jul-2020",
      name: "MD Traders",
      vType: "Purchase",
      vNo: 2,
      debit: "",
      credit: "1,24,300.00",
    },
    {
      date: "1-Jul-2020",
      name: "Samir Kalakheti",
      vType: "Purchase",
      vNo: 4,
      debit: "",
      credit: "21,18,750.00",
    },
  ];
  return (
    <>
      <div className="mt-12 px-4">
        <div className="grid  bg-gray-50 p-4">
          {/* Head */}
          <div>
            <h1 className="text-center bg-sky-300 font-semibold text-lg">
              Robin Liqours
            </h1>
            <div className="flex justify-between items-center pt-4 text-lg font-medium ">
              <h1>Day Book</h1>
              <h1>For 1-Jul-2020</h1>
            </div>
          </div>

          {/* Particulars */}

          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-t-2 border-gray-400 ">
                        <th className="text-left pl-10">Date</th>
                        <th className="px-12 text-left">Particulars</th>
                        <th className=" px-10 text-right">Vch Type</th>
                        <th className="px-10 text-right">Vch No</th>
                        <th className="text-right">Debit Amount</th>
                        <th className="text-right pr-10">Credit Amount</th>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <th colSpan={4}></th>
                        <th className="border-t border-gray-400 font-medium text-right">
                          Inwards Qty.
                        </th>
                        <th className="border-t border-gray-400 font-medium text-right pr-10">
                          Outwards Qty.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.length > 0 &&
                        tableData.map((item, index) => {
                          return (
                            <tr key={index} className="font-medium">
                              <td className="">{item.date}</td>
                              <td className="text-start ">{item.name}</td>
                              <td className="text-right px-10">{item.vType}</td>
                              <td className="text-right px-10">{item.vNo}</td>
                              <td className="text-right">{item.debit}</td>
                              <td className="text-right pr-10">
                                {item.credit}
                              </td>
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
    </>
  );
};

export default SalesPurchaseAndJournal;
