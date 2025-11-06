import s from "./ScanHistory.module.scss";
import { SCAN_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

  console.log(data);

  return (
    <div>
      {data.map((text, index) => (
        <p key={`${text}-${index}`}>
          {text}
          <QRCodeSVG value={text} size="130" />
        </p>
      ))}
    </div>
  );
};
