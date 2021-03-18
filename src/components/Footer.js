import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import "./Footer.css";
import { ReactComponent as FbIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as TwIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as PinIcon } from "../../images/icon-pinterest.svg";
import { ReactComponent as InstaIcon } from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <a href="./" className="nav-logo">
        <LogoIcon fill="white" />
      </a>

      <div className="footer-links">
        <div>
          <h5>Features</h5>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>

        <div>
          <h5>Resources</h5>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>

        <div>
          <h5>Company</h5>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="icon-footer">
        <FbIcon />
        <TwIcon />
        <PinIcon />
        <InstaIcon />
      </div>
    </div>
  );
}

export default Footer;
