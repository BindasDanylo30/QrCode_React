import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={s.nawMenu}>
      <Link to="/generate"> generate</Link>
      <Link to="/scan"> scan</Link>
      <Link to="/hisGenerate">History Gen</Link>
      <Link to="/hisScan">History Scan</Link>
    </nav>
  );
};
