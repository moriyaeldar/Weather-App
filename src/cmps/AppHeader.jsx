import { NavLink } from "react-router-dom";
import { doTrans, setLang } from "../services/i18n.service";
export const AppHeader = () => {
  const onSetLang = (lang) => {
    setLang(lang);
    lang === "he"
      ? document.body.classList.add("rtl")
      : document.body.classList.remove("rtl");
    doTrans();
  };
  return (
    <div className="app-header">
      <NavLink activeClassName="active-nav" exact to="/">
        <h1>M-Weather</h1>
      </NavLink>
      <select onChange={(ev) => onSetLang(ev.target.value)}>
        <option value="en">English</option>
        <option value="he">hebrew</option>
      </select>
    </div>
  );
};
