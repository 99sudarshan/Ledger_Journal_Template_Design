import React from "react";

const PurchaseAc = () => {
  return (
    <>
      <div className="mt-12">
        <div className="grid w-4/5 mx-auto bg-gray-50 p-4 ">
          {/* head */}
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-xl">खरिद खाता</h1>
            <h4 className=" w-full text-center">
              (नियम २३ को उपनियम (१) को खण्ड (छ) संग सम्बन्धित )
            </h4>
            <div className="flex justify-center items-center gap-4 border-t-2 border-x-2 py-2 border-black w-full text-sm font-bold">
              <div className="flex items-end">
                <span>करदाता दर्ता नं (PAN) :</span>
                <input
                  type="text"
                  className="border-b-2 border-dotted border-black outline-none pr-2 pl-4 w-32 [background:none]"
                />
              </div>
              <div className="flex items-end">
                <span>करदाताको नाम :</span>
                <input
                  type="text"
                  className="border-b-2 border-dotted border-black outline-none pr-2 pl-4 w-36 [background:none]"
                />
              </div>
              <div className="flex items-end">
                <span>साल :</span>
                <input
                  type="text"
                  className="border-b-2 border-dotted border-black outline-none pr-2 pl-4 w-32 [background:none]"
                />
              </div>
              <div className="flex items-end">
                <span>कर अवधि :</span>
                <input
                  type="text"
                  className="border-b-2 border-dotted border-black outline-none pr-2 pl-4 w-28 [background:none]"
                />
              </div>
            </div>
          </div>

          {/* particulars */}
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class=" inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden min-h-[30rem]">
                  <table className="min-w-full">
                    <thead>
                      <tr className="text-xs border-t-2 border-black">
                        <th
                          className="text-center border-x-2 border-black"
                          colSpan={8}
                        >
                          बीजक / प्रज्ञापनपत्र नम्बर
                        </th>
                        <th className="  border-r-2 border-black "></th>
                        <th className="  border-r-2 border-black"></th>
                        <th
                          className="px-1 border-r-2 border-black"
                          colSpan={2}
                        >
                          करयोग्य खरिद (पूंजीगत बाहेक)
                        </th>
                        <th
                          className="px-1 border-r-2 border-black"
                          colSpan={2}
                        >
                          करयोग्य पैठारी (पूंजीगत बाहेक)
                        </th>
                        <th
                          className=" px-1 border-r-2 border-black"
                          colSpan={2}
                        >
                          पूंजीगत करयोग्य खरिद / पैठारी
                        </th>
                      </tr>
                      <tr className="text-xs text-center border-b-2 border-black ">
                        <th className=" font-normal border-2 border-black">
                          मिति
                        </th>
                        <th className=" font-normal border-2 border-black">
                          बीजक नं.
                        </th>
                        <th className="font-normal border-2 border-black ">
                          प्रज्ञापनपत्र नं.
                        </th>
                        <th className="font-normal border-2 border-black ">
                          आपूर्तिकर्ताको नाम
                        </th>
                        <th className="font-normal border-2 border-black ">
                          आपूर्तिकर्ताको स्थायी लेखा नम्बर
                        </th>
                        <th className="font-normal border-2 border-black ">
                          खरिद/पैठारी गरिएका वस्तु वा सेवाको विवरण
                        </th>
                        <th className="font-normal border-2 border-black ">
                          खरिद/पैठारी गरिएका वस्तु वा सेवाको परिमाण
                        </th>
                        <th className="font-normal border-2 border-black ">
                          वस्तु वा सेवाको एकाई
                        </th>
                        <th className="border-r-2 border-black px-1 font-normal">
                          जम्मा खरिद मूल्य (रु)
                        </th>
                        <th className="border-r-2 border-black px-1 font-normal">
                          कर छुट हुने वस्तु वा सेवाको खरिद / पैठारी मूल्य (रु)
                        </th>
                        <th className="font-normal border-2 border-black">
                          मूल्य (रु)
                        </th>
                        <th className="font-normal border-2 border-black">
                          कर (रु)
                        </th>
                        <th className="font-normal border-2 border-black">
                          मूल्य (रु)
                        </th>
                        <th className="font-normal border-2 border-black">
                          कर (रु)
                        </th>
                        <th className="font-normal border-2 border-black">
                          मूल्य (रु)
                        </th>
                        <th className="font-normal border-2 border-black">
                          कर (रु)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center text-xs">
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          hello
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          heloo
                        </td>
                        <td className="border-2 border-black px-2 py-1">
                          help
                        </td>
                        <td className="border-2 border-black">hello</td>
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

export default PurchaseAc;
