import React from "react";
import pastebin from "../utils/pastebin.png";

function Footer(): JSX.Element {
  return (
    <footer className="bg-light text-center text-lg-start">
  <div className="text-center p-3" color="background-color: rgba(0, 0, 0, 0.2);">
    Site and Project Design by: 
    <a className="text-dark" href="https://mdbootstrap.com/"> Sena Sarkaya <b>2021</b></a>
  </div>
  <p>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
</footer>
  );
}

export default Footer;

