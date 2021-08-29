import "./Header.css";
import logo from "../../images/logo.png";
import userImg from "../../images/user.png";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header__logo">
        <a href="/#">
          <img src={logo} alt="Netflix logo" />
        </a>
      </div>
      <div className="header__user">
        <a href="#">
          <img src={userImg} alt="User icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
