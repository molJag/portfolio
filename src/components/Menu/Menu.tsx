import menuList from "../../mocks/menu.json";
import "./Menu.css";
import menuImg from "../../assets/images/menu-burger.svg";
import { useState } from "react";

function Menu() {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  }
  return (
    <>
      <nav className="navigation desktop">
        <ul>
          {menuList.map(
            (menuItem: { name: string; ancle: string }, index: number) => (
              <li key={index}>
                <a href={`#${menuItem.ancle}`}>{menuItem.name}</a>
              </li>
            )
          )}
        </ul>
      </nav>

      <input type="checkbox" id="hamburger" checked={checked} />
        <label id="hamburger-logo" htmlFor={"hamburger"} onClick={() => toggleChecked()}>
          <img src={menuImg} alt="Menu icon" />
        </label>
      <nav className="navigation mobile">
        <ul className="list-item">
          {menuList.map(
            (menuItem: { name: string; ancle: string }, index: number) => (
              <li key={index} onClick={() => setChecked(false)}>
                <a href={`#${menuItem.ancle}`}>{menuItem.name}</a>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
}

export default Menu;
