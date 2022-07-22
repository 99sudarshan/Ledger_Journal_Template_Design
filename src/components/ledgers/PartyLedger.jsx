import React from "react";

const PartyLedger = () => {
  const tableData = [
    {
      date: "1-Jul-2020",
      type: "Dr",
      particulars: "Purchase Account",
      vType: "Purchase",
      vNo: 4,
      debit: "",
      credit: "67,800.00",
    },
    {
      date: "",
      type: "Cr",
      particulars: "Sales Account",
      vType: "Sales",
      vNo: 2,
      debit: "28,250.00",
      credit: "",
    },
    {
      date: "",
      type: "Cr",
      particulars: "Sales Account",
      vType: "Sales",
      vNo: 3,
      debit: "27,685.00",
      credit: "",
    },
    {
      date: "",
      type: "Cr",
      particulars: "Charger",
      vType: "Journal",
      vNo: 1,
      debit: "5,000.00",
      credit: "",
    },
    {
      date: "",
      type: "Cr",
      particulars: "Sales Account",
      vType: "Journal",
      vNo: 4,
      debit: "5,650.00",
      credit: "",
    },
    {
      date: "",
      type: "Cr",
      particulars: "Purchase Account",
      vType: "Debit Note",
      vNo: 1,
      debit: "5,000.00",
      credit: "",
    },
  ];
  return (
    <>
      <div className="mt-12">
        <div className="grid w-3/5 mx-auto bg-gray-50 p-4">
          {/* head */}
          <div className="flex flex-col justify-center items-center gap-12">
            <div className="flex justify-center items-center flex-col text-lg gap-1">
              <header className="font-bold">Robin Liqours</header>
              <p className="underline">Hardi</p>
              <p className="font-medium">Abc</p>
              <header className="font-semibold">Ledger Account</header>
            </div>

            {/* for year */}
            <p className="text-lg">For 1-Jul-2020</p>
          </div>

          {/* Particulars */}
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden min-h-[30rem]">
                  <table className="min-w-full">
                    <thead className="text-lg mb-2">
                      <tr className="border-b-2 border-t-2 border-black">
                        <th scope="col" className=" text-center font-medium">
                          Date
                        </th>
                        <th scope="col" className=""></th>
                        <th
                          scope="col"
                          className=" text-left font-medium"
                          colSpan={2}
                        >
                          Particulars
                        </th>
                        <th
                          scope="col"
                          className=" px-6 text-right font-medium"
                        >
                          Vch Type
                        </th>
                        <th
                          scope="col"
                          className=" px-6 text-right font-medium"
                        >
                          Vch No.
                        </th>
                        <th
                          scope="col"
                          className=" px-6 text-right font-medium"
                        >
                          Debit
                        </th>
                        <th
                          scope="col"
                          className=" pl-6 pr-2 text-right font-medium"
                        >
                          Credit
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {tableData.length > 0 &&
                        tableData.map((item, index) => {
                          return (
                            <tr className=" text-lg" key={index}>
                              <td className="font-medium ">{item.date}</td>
                              <td className="">{item.type}</td>
                              <td
                                className="font-medium whitespace-nowrap "
                                colSpan={2}
                              >
                                {item.particulars}
                              </td>
                              <td className=" font-medium text-right  px-6 whitespace-nowrap">
                                {item.vType}
                              </td>
                              <td className="font-normal  text-right px-6 whitespace-nowrap">
                                {item.vNo}
                              </td>
                              <td className="font-normal  text-right px-6 whitespace-nowrap">
                                {item.debit}
                              </td>
                              <td className="font-normal  text-right pr-2 whitespace-nowrap">
                                {item.credit}
                              </td>
                            </tr>
                          );
                        })}

                      <tr className="text-lg ">
                        <td colSpan={6}></td>
                        <td className=" text-right pr-6 border-t-2 border-black">
                          71,585.00
                        </td>
                        <td className="text-right pr-2 border-t-2 border-black">
                          67,800.00
                        </td>
                      </tr>
                      <tr className="text-lg">
                        <td className=""></td>
                        <td className=" ">Dr</td>
                        <td
                          className="font-medium text-center whitespace-nowrap "
                          colSpan={4}
                        >
                          Closing Balance
                        </td>
                        <td className=" text-right pr-6 border-b-2 border-black"></td>
                        <td className="text-right pr-2 border-b-2 border-black">
                          3,785.00
                        </td>
                      </tr>
                      <tr className="text-lg ">
                        <td colSpan={6}></td>
                        <td className=" text-right font-semibold pr-6 border-t-2 border-b-2 border-black">
                          71,585.00
                        </td>
                        <td className="text-right font-semibold pr-2 border-t-2 border-b-2 border-black">
                          71,585.00
                        </td>
                      </tr>
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

export default PartyLedger;
