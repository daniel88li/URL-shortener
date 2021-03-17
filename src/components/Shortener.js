import React, { useState } from "react";
import LinkCard from "./LinkCard";
import "./Shortener.css";

function Shortener() {
  const [urlInput, setUrlInput] = useState("");
  const [linkList, setLinkList] = useState([]);
  const [err, setError] = useState("");
  const [currCopyIndex, setCurrCopyIndex] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setUrlInput(value);
  };

  const handleShorten = async (e) => {
    e.preventDefault();
    // console.log(isURL(urlInput));
    if (urlInput === "") {
      setError("Please add a link");
      return;
    }

    if (isURL(urlInput)) {
      const url = `https://api.shrtco.de/v2/shorten?url=${urlInput}`;

      try {
        let response = await fetch(url);
        if (!response.ok) {
          console.log(`Error status: ${response.status}`);
        } else {
          let res = await response.json();
          setLinkList((prevList) => {
            return [...prevList, res.result];
          });
          setError("");
        }
      } catch (err) {
        console.error(err);
        // setError(err);
      }
    }
    setUrlInput("");
  };

  // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  const isURL = (str) => {
    var pattern = new RegExp("(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}");
    return pattern.test(str);
  };

  const copyToClipboard = async (e, index, linkObj) => {
    try {
      await navigator.clipboard.writeText(linkObj.full_short_link);
      linkObj["copied"] = true;
      setCurrCopyIndex((prevIndex) => {
        if (prevIndex !== null && prevIndex !== index) {
          // reset old copy button
          linkList[prevIndex]["copied"] = false;
        }
        return index;
      });
    } catch (err) {
      console.log(err);
      linkObj["copied"] = false;
    }
  };

  const shortenLinks = linkList.map((linkObj, index) => {
    return (
      <LinkCard
        key={linkObj.code}
        linkObj={linkObj}
        copyFunc={(e) => copyToClipboard(e, index, linkObj)}
      />
    );
  });

  return (
    <>
      <form noValidate className="shorten-form" onSubmit={handleShorten}>
        <input
          type="text"
          name="url"
          value={urlInput}
          onChange={handleChange}
          placeholder="Shorten a link here..."
        />
        <p className="error-msg">{err}</p>
        <input type="submit" value="Shorten It!" />
      </form>
      {shortenLinks}
    </>
  );
}

export default Shortener;
