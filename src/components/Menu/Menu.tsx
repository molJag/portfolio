import menuList from "../../mocks/menu.json";
import "./Menu.css";

function Menu() {
  return (
    <nav className="navigation">
      <ul>
        {menuList.map((menuItem: { name: string; ancle: string }, index: number) => (
          <li key={index}>
            <a href={`#${menuItem.ancle}`}>{menuItem.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
