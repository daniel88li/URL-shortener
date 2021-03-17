import React from "react";
import Button from "./Button";
import "./LinkCard.css";

function LinkCard({ linkObj, copyFunc }) {
  return (
    <div className="link-card">
      <span className="link-original">{linkObj.original_link}</span>
      <hr />
      <span className="link-short">{linkObj.full_short_link}</span>
      <Button
        onClick={copyFunc}
        btnStyle="btn--regular"
        btnSize="btn--long"
        btnColour={linkObj.copied ? "violet" : "cyan"}
        text={linkObj.copied ? "Copied!" : "Copy"}
      />
    </div>
  );
}

export default LinkCard;
