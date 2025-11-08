import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={s.navMenu}>
      <Link className={s.link} to="/generate">
        Generate
      </Link>
      <Link className={s.link} to="/scan">
        Scan
      </Link>
      <Link className={s.link} to="/hisGenerate">
        History Gen
      </Link>
      <Link className={s.link} to="/hisScan">
        History Scan
      </Link>
    </nav>
  );
};
