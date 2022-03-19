import "./Navbar.css";
import searchIcon from "./icons8-search-30-grey.png";
import userIcon from "./user-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [image, setImage] = useState(false);

  return (
    <nav className="nav">
      <div className="logo-box">
        <FontAwesomeIcon className="icon raddit-icon  fa-2xl" icon={faReddit} />
        <img
          className="reddit-logo"
          src={`${process.env.PUBLIC_URL}/images/reddit.png`}
          alt="reddit-logo"
        />
      </div>

      <form>
        <img
          className="search-icon"
          // src={`${process.env.PUBLIC_URL}/images/icons8-search-30-grey.png`}
          src={searchIcon}
          alt="search-icon"
        />
        <div className="search-icon"></div>
        <input type="search" placeholder="Search Reddit"></input>
      </form>

      <div className="sign-in-box">
        <button className="button log-in">Log In</button>
        <button className="button sign-up">Sign Up</button>
        <img className="user-icon" src={userIcon} alt="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
