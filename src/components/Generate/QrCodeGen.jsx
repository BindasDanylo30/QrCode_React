import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./QrCodeGen.module.scss";
import { GENERATE_DATA } from "../../constants";

export const QrCodeGen = () => {
  // React HOOKS
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const OnHandleClick = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue("");
  };

  const OnHandleChange = (event) => {
    setValue(event.target.value);
    setResult("");
  };
  console.log("result: ", result);

  return (
    <div className={s.conteiner}>
      <input
        id="0"
        type="text"
        placeholder="Enter your text..."
        value={value}
        onChange={OnHandleChange}
        className={s.input}
      />
      <button type="button" className={s.button} onClick={OnHandleClick}>
        generate
      </button>

      {result !== "" && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={result} size="230" />
        </div>
      )}
    </div>
  );
};
