import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="Filmzone Logo" />
      </NavLink>
      <Navbar />
    </header>
  );
}

export default Header;
