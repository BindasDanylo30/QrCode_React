import s from "./GenerateHistory.module.scss";
import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

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
