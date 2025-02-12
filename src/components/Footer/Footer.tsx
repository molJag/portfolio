import LogoSvg from "../../assets/images/logo.svg";
import GithubSvg from "../../assets/icons/github.svg";
import LinkedinSvg from "../../assets/icons/linkedin.svg";
import mockData from "../../mocks/footer.json";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={LogoSvg} alt={"Logo"} />
        <p className="copyright"><a href="mailto:dulcemcb13@gmail.com">{mockData.copyright}</a></p>
      </div>
      <div className="social">
        <a href="https://github.com/johnny-aguilera"><img src={GithubSvg} alt="linkedin icon" /></a>
        <a href="https://www.linkedin.com/in/john-a-b3349ba0"><img src={LinkedinSvg} alt="linkedin icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;
