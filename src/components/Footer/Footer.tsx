import LogoSvg from "../../assets/images/logo.svg";
import mockData from "../../mocks/footer.json";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className={"logo"}>
        <img src={LogoSvg} alt={"Logo"} />
        <p className="copyright"><a href="mailto:dulcemcb13@gmail.com">{mockData.copyright}</a></p>
      </div>
    </footer>
  );
}

export default Footer;
