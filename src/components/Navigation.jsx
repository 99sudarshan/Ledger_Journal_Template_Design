import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <h1 className="font-bold text-2xl flex justify-center ">
        See Following Designs
      </h1>
      <div className="grid place-content-center place-items-center pt-10 text-lg text-blue-500">
        <NavLink to="/party-ledger" className="hover:underline">
          Party Ledger
        </NavLink>
        <NavLink
          to="/sales-purchase-journal-ledger"
          className="hover:underline"
        >
          Sales, Purchase and Journal's Ledger
        </NavLink>
        <NavLink to="/journal" className="hover:underline">
          Journal Voucher
        </NavLink>
      </div>
    </>
  );
};

export default Navigation;
