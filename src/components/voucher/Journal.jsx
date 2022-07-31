import React from "react";

const Journal = () => {
  return (
    <>
      <div className="mt-12">
        <div className="grid w-1/2 mx-auto bg-gray-50 p-4">
          {/* head */}
          <div className="flex justify-center items-center flex-col gap-1 font-semibold text-lg">
            <header className="font-bold">Robin Liqours</header>
            <p>Hardi</p>
            <header>Journal Voucher</header>
          </div>

          {/* Number and Date */}
          <div className="flex justify-between items-center my-10 h-10">
            <div className="h-full bg-gray-50 px-3">
              No. :
              <input
                type="number"
                className="outline-none focus:outline-none h-full [background:none] pl-4 "
              />
            </div>
            <div className="h-full bg-gray-50 px-3">
              Dated :
              <input
                type="date"
                className="outline-none focus:outline-none h-full [background:none] pl-4"
              />
            </div>
          </div>

          <div>
            {/* particulars */}
            <div className="flex justify-center items-center border-x-2 border-y-2 border-black font-bold text-lg">
              <div className="flex-[5] border-r-2 border-black ">
                <p className="pl-14">Particulars</p>
              </div>
              <div className="flex-[3] text-right border-r-2 border-black">
                <p className="pr-2">Debit</p>
              </div>
              <div className="flex-[3] text-right ">
                <p className="pr-2">Credit</p>
              </div>
            </div>

            {/* IN journal body */}
            <div>
              <div className="flex justify-center items-center font-medium text-lg">
                <div className="flex-[5] border-x-2 border-black min-h-[40rem] pt-5">
                  <div className="flex justify-between items-center pl-12 pr-2 ">
                    <p>Abs</p>
                    <span className="italic">Dr</span>
                  </div>

                  <div className="flex justify-between items-center pl-12 pr-2 ">
                    <p>Agst Ref 10</p>
                    <div>5,000.00</div>
                  </div>

                  <div className="mt-4">
                    <p>
                      <span className="italic mr-2">To</span>Charger
                    </p>
                  </div>
                </div>

                <div className="flex-[3] text-right border-r-2 border-black min-h-[40rem] pt-5 ">
                  <div className="flex justify-end pr-2">5,000.00</div>
                </div>

                <div className="flex-[3] text-right border-r-2 border-black min-h-[40rem]">
                  <div className="h-full pt-24 pr-2">
                    <div>5,000.00</div>
                  </div>
                </div>
              </div>

              {/* Dr Cr total */}
              <div className="flex justify-center items-center font-medium h-10 text-lg border-l-2 border-b-2 border-black ">
                <div className="flex-[5] relative bottom-12 ">
                  <div className="flex flex-col justify-center">
                    <p className="pl-3">On Account of:</p>
                    <p className="pl-12 uppercase tracking-wider font-normal">
                      being bbs ma msc
                    </p>
                  </div>
                </div>
                <div className="flex-[3] text-right border-x-2 border-t-2 border-black h-full">
                  <div className=" leading-8 pr-2">NRs 5,000.00</div>
                </div>
                <div className="flex-[3] text-right  border-r-2 border-t-2 border-black h-full ">
                  <div className="leading-8 pr-2">NRs 5,000.00</div>
                </div>
              </div>
            </div>

            {/* Authorised Signatory */}
            <div className="flex justify-end pt-28">
              <div className="flex flex-col items-center">
                <span>----------------------------------------</span>
                <h1 className="font-medium text-lg tracking-wide">
                  Authorised Signatory
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Journal;
