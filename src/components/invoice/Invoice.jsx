import React from "react";

const Invoice = () => {
  const tableData = [
    {
      sn: 1,
      des: "hsd (diesel)",
      qty: 40.45,
      rate: 153.36,
      amount: "6,194.69",
    },
    {
      sn: 2,
      des: "hsd (diesel)",
      qty: 40.45,
      rate: 153.36,
      amount: "6,194.69",
    },
    {
      sn: 3,
      des: "hsd (diesel)",
      qty: 40.45,
      rate: 153.36,
      amount: "6,194.69",
    },
    {
      sn: 4,
      des: "hsd (diesel)",
      qty: 40.45,
      rate: 153.36,
      amount: "6,194.69",
    },
  ];
  return (
    <>
      <div className="mt-12">
        <div className="grid w-3/5 mx-auto bg-gray-50 p-4 ">
          {/* head */}
          <div className="flex flex-col justify-center items-center gap-1">
            <header className="font-bold text-lg">
              Kailash Oil Distribution Pvt. Ltd.
            </header>
            <p>Bharatpur-3, Pulchowk, Narayangarh, Chitwan</p>
            <p>Phone : 9856745678</p>
            <p>Email: example@gmail.com</p>
          </div>

          {/* Bills body */}
          <section>
            {/* Pan No */}
            <div className="flex justify-start items-center mt-10 h-10">
              <label
                htmlFor="pan"
                className=" border-2 border-black px-3 py-1 h-full text-center leading-7 font-semibold"
              >
                PAN No. :
              </label>
              <input
                type="text"
                value="234678598"
                className="[background:none] h-full outline-none border-2 border-black pl-2 font-semibold tracking-[0.7rem] text-center"
                disabled
              />
            </div>

            {/* Contents */}
            <div className="border-2 border-black min-w-full">
              <h1 className="text-center font-bold text-lg border-b-2  border-black py-2 w-full">
                Tax Invoice
              </h1>

              <div className="flex  items-start ">
                <div className="flex flex-1  flex-col gap-1 justify-start px-3 border-r-2 border-black">
                  <div className="flex items-center font-semibold">
                    <span className="uppercase  block w-36">m/s :</span>
                    <span>Hello World</span>
                  </div>
                  <div className="flex items-center">
                    <span className="block w-36">Address :</span>
                    <span>Hello World</span>
                  </div>
                  <div className="flex items-center">
                    <span className="block w-36">Phone No :</span>
                    <span>Hello World</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <span className="  block w-36">PAN No :</span>
                    <span>Hello World</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <span className="  block w-36">Mode of Payment :</span>
                    <span className="">Cash</span>
                  </div>
                </div>

                <div className="flex basis-2/5 flex-col gap-1  px-3">
                  <div className="flex items-center font-semibold">
                    <span className="block w-28">Invoice No:</span>
                    <span> 123454</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <span className="block w-28">Tran - Date:</span>
                    <span> 2022/01/23</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <span className="block w-28">Invoice Date:</span>
                    <span> 2022/01/23</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <span className="block w-28">Invoice Miti:</span>
                    <span> 2079/03/13</span>
                  </div>
                </div>
              </div>

              {/* invoice item table */}
              <table className="min-w-full ">
                <thead>
                  <tr className="font-bold text-lg border-t-2 border-b-2 border-black">
                    <th className="text-left px-2 border-r-2 border-black w-10">
                      Sr#
                    </th>
                    <th className="text-left px-2 w-1/2  border-r-2 border-black">
                      Description
                    </th>
                    <th className="text-right px-2  w-24 border-r-2 border-black">
                      Quantity
                    </th>
                    <th className="text-left px-2  border-r-2 border-black">
                      Rate
                    </th>
                    <th className="text-left pl-2">Amount</th>
                  </tr>
                </thead>
                <tbody className="">
                  {tableData.length > 0 &&
                    tableData.map((item, i) => {
                      return (
                        <tr key={i} className="">
                          <td className="border-r-2 border-black px-2 py-1">
                            {item.sn}
                          </td>
                          <td className="border-r-2 border-black px-2 uppercase py-1">
                            {item.des}
                          </td>
                          <td className="border-r-2 border-black px-2 text-center py-1">
                            {item.qty}
                          </td>
                          <td className="border-r-2 border-black px-2 text-right py-1">
                            {item.rate}
                          </td>
                          <td className="px-2 text-right py-1">
                            {item.amount}
                          </td>
                        </tr>
                      );
                    })}
                  {tableData.length <= 10 && (
                    <tr className=" h-56">
                      <td className="border-r-2 border-black px-2 py-1"></td>
                      <td className="border-r-2 border-black px-2 uppercase py-1"></td>
                      <td className="border-r-2 border-black px-2 text-center py-1"></td>
                      <td className="border-r-2 border-black px-2 text-right py-1"></td>
                      <td className="px-2 text-right py-1"></td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Calculation */}
              <div className="flex items-start justify-between border-t-2 border-black">
                <div className="flex flex-col flex-1  border-r-2 border-black">
                  <div className="flex font-bold justify-end pr-10 gap-10  py-2 border-b-2 border-black">
                    <span>Total Quantity :</span>
                    <span>40</span>
                  </div>
                  <div className="flex flex-col h-32 justify-end items-start px-2">
                    <h1>Amount Payable In Words:</h1>
                    <textarea
                      name=""
                      id=""
                      value=" rs. six thousand rupees only"
                      className="w-full h-7 overflow-x-auto outline-none ring-0 focus:ring-0 focus:outline-none resize-none uppercase"
                      disabled
                    ></textarea>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-2 basis-[32.3%] ">
                  <div className="flex flex-col gap-1 border-b-2 border-black">
                    <div className="flex items-center px-2 pt-2 justify-between font-bold ">
                      <span className="">Gross Amount :</span>
                      <span>6,194.00</span>
                    </div>
                    <div className="flex justify-between px-2 items-center ">
                      <span className="">Discount Amount :</span>
                      <span>0.00</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 border-b-2 border-black">
                    <div className="flex items-center px-2 justify-between font-bold ">
                      <span className="">Taxable Amount :</span>
                      <span>6,194.00</span>
                    </div>
                    <div className="flex justify-between px-2 items-center ">
                      <span className="">Vat (13%) :</span>
                      <span>0.00</span>
                    </div>
                  </div>
                  <div className="flex items-center px-2 justify-between font-bold">
                    <span className="">Net Amount :</span>
                    <span>6,194.00</span>
                  </div>
                </div>
              </div>

              {/* Remarks */}
              <div className="flex flex-col gap-3 items-start border-t-2 border-black pt-1 pb-4">
                <div className="flex justify-start items-start gap-1 w-full px-2">
                  <span className="block w-20">Remarks :</span>
                  <textarea
                    name=""
                    id=""
                    className="flex-1 h-10  [background:none] outline-none ring-0 focus:outline-none focus:ring-0 resize-none overflow-auto"
                    disabled
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Explicabo, ex voluptates. Cumque!
                  </textarea>
                </div>
                <div className="px-8">306</div>
              </div>
            </div>
          </section>

          {/* signatory part */}
          <div className="flex justify-between items-start pt-20 font-medium text-gray-700">
            <div className="flex flex-col items-start ">
              <span>...........................</span>
              <span>Receiver's</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <span>...................................................</span>
              <span>For:GOOD TRADERS</span>
              <span className="text-xs">
                Print Date: July 29, 2022 at 4:15:47 PM
              </span>
              <span className="text-xs">User: PARIS THAPALIYA</span>
            </div>
          </div>
          <h1 className="text-center mt-4 text-gray-700 font-medium uppercase">
            &#42;&#42;Thank You&#42;&#42;
          </h1>
        </div>
      </div>
    </>
  );
};

export default Invoice;
