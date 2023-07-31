import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Faycal-Bezleghdir">
        <FiGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/faycal-bezleghdir-/">
        <FiLinkedin className="icon" />
      </a>
    </div>
  );
}

export default Footer;
