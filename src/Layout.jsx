import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { QrCodeGen } from "./components/Generate/QrCodeGen.jsx";
import { QrCodeScan } from "./components/Scan/QrCodeScan.jsx";
import { ScanHistory } from "./components/ScanHistory/ScanHistory.jsx";
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory.jsx";
export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGen />} />
        <Route path="/scan" element={<QrCodeScan />} />
        <Route path="/hisGenerate" element={<GenerateHistory />} />
        <Route path="/hisScan" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};
