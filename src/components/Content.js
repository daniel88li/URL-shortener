import React from "react";
import { ReactComponent as InfoImage } from "../../images/illustration-working.svg";
import "./Content.css";
// import SvgShortenMobile from "./SvgShortenMobile";
// import { ReactComponent as BoostImageMobile } from "../../images/bg-boost-mobile.svg";
import Button from "./Button";
import Shortener from "./Shortener";

function Content() {
  return (
    <>
      <div className="top-box">
        <div className="image">
          <InfoImage
            className="svg-working"
            width="300"
            height="350"
            viewBox="0 0 400 500"
          />
        </div>

        <div className="info-box">
          <h3>More than just shorter links</h3>

          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>

          <Button
            btnStyle="btn--round"
            btnSize="btn--medium"
            btnColour="cyan"
            text="Get Started"
          />
        </div>
      </div>

      <Shortener />

      <div>
        {/* <SvgShortenMobile
          height="200"
          viewBox="0 0 130 200"
          className="shorten-svg"
        /> */}
        {/* <BoostImageMobile className="boost-svg" height="300" /> */}
      </div>
    </>
  );
}

export default Content;
