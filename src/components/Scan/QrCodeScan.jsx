import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./QrCodeScan.module.scss";
import { SCAN_DATA } from "../../constants";

export const QrCodeScan = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );

    console.log(prevData);
  };
  console.log(SCAN_DATA);

  return (
    <div className={s.conteiner}>
      {" "}
      {/* // здесь костыль: обернутый ещё один блок, не смог поставить style сканера */}
      <div style={{ width: 200 }}>
        <Scanner
          allowMultiple
          onScan={scanHandler}
          components={{
            finder: false,
          }}
        />
      </div>
      <p className={s.result}> {scanned}</p>
    </div>
  );
};
