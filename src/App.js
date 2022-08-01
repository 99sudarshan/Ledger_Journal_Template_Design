import React from "react";
import { Routes, Route } from "react-router-dom";
import PartyLedger from "./components/ledgers/PartyLedger";
import SalesPurchaseAndJournal from "./components/ledgers/SalesPurchaseAndJournal";
import Navigation from "./components/Navigation";
import Journal from "./components/voucher/Journal";
import Invoice from "./components/invoice/Invoice";
import PurchaseAc from "./components/purchase/PurchaseAc";
import SalesAc from "./components/sales/SalesAc";
import BillsReceivable from "./components/ledgers/BillsReceivable";
import BillsPayable from "./components/ledgers/BillsPayable";
const App = () => {
  return (
    <div className="h-full py-6">
      <Navigation />
      <Routes>
        <Route path="/party-ledger" element={<PartyLedger />} />
        <Route
          path="/sales-purchase-journal-ledger"
          element={<SalesPurchaseAndJournal />}
        />
        <Route path="/journal" element={<Journal />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/purchase-account" element={<PurchaseAc />} />
        <Route path="/sales-account" element={<SalesAc />} />
        <Route path="/bills-receivable" element={<BillsReceivable />} />
        <Route path="/bills-payable" element={<BillsPayable />} />
      </Routes>
    </div>
  );
};

export default App;
