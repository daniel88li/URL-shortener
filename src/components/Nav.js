import React, { useState } from "react";
import "./Nav.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import Button from "./Button";

function Nav() {
  const [menuClick, setmenuClick] = useState(false);

  const handleMenuClick = () => {
    setmenuClick(!menuClick);
  };

  const isSmallScreen = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="nav-logo">
          <LogoIcon />
        </Link>

        {/* media query */}
        {isSmallScreen && (
          <div className="menu-icon" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
        )}
      </nav>
      {menuClick ? (
        <div className="menu-nav">
          <ul>
            <li>
              <Link to="#features">Features</Link>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <hr></hr>
            <li>
              <a href="#login">Login</a>
            </li>
            <li>
              <Button
                btnStyle="btn--round"
                btnSize="btn--mobile"
                btnColour="cyan"
                text="Sign Up"
              />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Nav;
