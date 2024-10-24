import LogoSvg from "../../assets/images/logo.svg";
import mockData from "../../mocks/footer.json";
import Menu from "../Menu/Menu";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className={"logo"}>
        <img src={LogoSvg} alt={"Logo"} />
        <p className="copyright">{mockData.copyright}</p>
      </div>
      <Menu />
    </footer>
  );
}

export default Footer;
