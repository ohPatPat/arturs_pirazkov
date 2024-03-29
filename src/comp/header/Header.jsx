import "../../App.scss";
import { Nav, BurgerMenu } from "./Navigation.jsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../assets/img/icons/logo/Logo_GreenMan.svg";
import Name from "../../assets/img/icons/logo/Logo_GreenName.svg";

export const Header = (props) => {
  return (
    <header>
      <AnchorLink href="#HeroImg">
        <img src={Logo} alt="" loading="lazy" />
      </AnchorLink>
      <Nav
        identify={"HeaderNav"}
        name={({ isActive }) => (isActive ? "Active" : "")}
      />
      <AnchorLink href="#HeroImg">
        <img src={Name} alt="" loading="lazy" />
      </AnchorLink>

      <BurgerMenu />
      <div id="CoverUp"></div>
    </header>
  );
};
