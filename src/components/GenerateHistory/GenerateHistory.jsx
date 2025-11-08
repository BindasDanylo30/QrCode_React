import s from "./GenerateHistory.module.scss";
import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

  console.log(data);

  return (
    <div className={s.historyContainer}>
      {data.map((text, index) => (
        <div className={s.historyCard} key={`${text}-${index}`}>
          <div className={s.qrWrapper}>
            <QRCodeSVG value={text} size="130" />
          </div>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};
