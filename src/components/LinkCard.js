import React from "react";
import Button from "./Button";
import "./LinkCard.css";

function LinkCard({ linkObj }) {
  return (
    <div className="link-card">
      <span className="link-original">{linkObj.original_link}</span>
      <hr />
      <span className="link-short">{linkObj.full_short_link}</span>
      <Button
        btnStyle="btn--regular"
        btnSize="btn--long"
        btnColour="cyan"
        text="Copy"
      />
    </div>
  );
}

export default LinkCard;
