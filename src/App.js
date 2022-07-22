import React from "react";
import { Routes, Route } from "react-router-dom";
import PartyLedger from "./components/ledgers/PartyLedger";
import SalesPurchaseAndJournal from "./components/ledgers/SalesPurchaseAndJournal";
import Navigation from "./components/Navigation";
import Journal from "./components/voucher/Journal";
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
      </Routes>
    </div>
  );
};

export default App;
