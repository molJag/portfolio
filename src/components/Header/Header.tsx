import LogoSvg from "../../assets/images/logo.svg";
import Menu from "../Menu/Menu";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className={"logo"}>
        <img src={LogoSvg} alt={"Logo"} />
      </div>
      <Menu />
    </header>
  );
}

export default Header;
