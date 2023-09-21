import "../../App.scss";
import { Nav, BurgerMenu } from "./Navigation.jsx";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header = (props) => {
    return (
        <header>
            <Nav
                identify={"HeaderNav"}
                name={({ isActive }) => (isActive ? "Active" : "")}
            />

            <BurgerMenu />
        </header>
    );
};