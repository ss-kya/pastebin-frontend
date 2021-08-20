import React from "react";
import pastebin from "../utils/pastebin.png";

function Navbar(): JSX.Element {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-1 mt-1 h1">Pastebin</span>
        <img src={pastebin} width="50px"></img>
      </nav>
    </>
  );
}

export default Navbar;
