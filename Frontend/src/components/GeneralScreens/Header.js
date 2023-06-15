import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import "../../Css/Header.css";
import { RiPencilFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import SkeletonElement from "../Skeletons/SkeletonElement";
import { AuthContext } from "../../Context/AuthContext";

const Header = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header>
      <div className="averager">
        <Link to="/" className="logo">
          <img className="logo2" src="logoneu.png" alt="Logo" />
        </Link>

        <div class="dropdownContainer">
          <div class="dropdown">
            <button class="dropbtn">
              Cheat sheets
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="dropdown-content">
              <a
                href="https://livecoding-examples-html.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                HTML En
              </a>
              <a
                href="https://livecoding-examples-html-de.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                HTML De
              </a>
              <a
                href="https://livecoding-examples-css.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                CSS En
              </a>
              <a
                href="https://www.w3schools.com/css/#"
                rel="noreferrer"
                target="_blank"
              >
                CSS De
              </a>
              <a
                href="https://www.w3schools.com/js/"
                rel="noreferrer"
                target="_blank"
              >
                JS En
              </a>
              <a
                href="https://www.w3schools.com/js/"
                rel="noreferrer"
                target="_blank"
              >
                JS De
              </a>
            </div>
          </div>
        </div>

        <SearchForm />
        <div className="header_options">
          {auth ? (
            <div className="auth_options">
              <Link className="addStory-link" to="/addstory">
                <RiPencilFill /> Add Story{" "}
              </Link>

              <Link to="/readList" className="readList-link">
                <BsBookmarks />
                <span id="readListLength">{activeUser.readListLength}</span>
              </Link>
              <div className="header-profile-wrapper ">
                {loading ? (
                  <SkeletonElement type="minsize-avatar" />
                ) : (
                  <img src={`${activeUser.photo}`} alt={activeUser.username} />
                )}

                <div className="sub-profile-wrap  ">
                  <Link className="profile-link" to="/profile">
                    {" "}
                    <FaUserEdit color="rgb(56, 162, 170) " /> Profile{" "}
                  </Link>

                  <button className="logout-btn" onClick={handleLogout}>
                    {" "}
                    <BiLogOut /> Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="noAuth_options">
              <Link className="login-link" to="/login">
                {" "}
                Login{" "}
              </Link>

              <Link className="register-link" to="/register">
                {" "}
                Sign-up{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
