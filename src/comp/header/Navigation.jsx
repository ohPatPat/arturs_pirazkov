import React, { useState, useEffect } from "react";
import { Squash as Hamburger, Squash } from "hamburger-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Nav = (props) => {
  return (
    <nav id={props.identify}>
      <ul>
        <li>
          <AnchorLink  href='#OmMig'>
          Om Mig
          </AnchorLink>
        </li>
        <li>
          <AnchorLink  href='#Priser'>
          Priser
          </AnchorLink>
        </li>
        <li>
          <AnchorLink  href='#Portrait'>
          Portræt
          </AnchorLink>
        </li>
        <li>
          <AnchorLink  href='#Galleri'>
          Galleri
          </AnchorLink>
        </li>
        <li>
          <AnchorLink  href='#Kontakt'>
          Kontakt
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  if (isOpen) {
  }

  useEffect(() => {
    if (!isOpen) {
    }
  }, [isOpen]);

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Squash toggled={isOpen} toggle={setOpen} id={isOpen ? "Light" : "Dark"}/>
      <Nav
        identify={isOpen ? "burgerActive" : "burgerNotActive"}
        click={handleToggle}
      />
    </>
  );
};
