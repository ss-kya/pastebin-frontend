import pastebin from "../utils/pastebin.png";

function Navbar(): JSX.Element {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-1 mt-1 h1">Pastebin</span>
        <img src={pastebin} width="50px" alt="pastebin-icon"></img>
      </nav>
    </>
  );
}

export default Navbar;
