// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
import CommunityPage from "../pages/Community/Community";


import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setLoggedInUser("");
    navigate("/home");
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="headerContent">
        <Link to="/" className="logoSpace">
          <h1>Gaming Community</h1>
        </Link>

        <div className={`navLinks ${menuOpen ? "mobile active" : ""}`}>
          {!loggedInUser ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Register</Link>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/games">Games</Link>
              <Link to="/blogs">Blog</Link>
              <Link to="/community">Community</Link>
            </>
          )}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {loggedInUser && (
        <nav className="nav">
          <div className="user-info">
            <div className="profile-toggle" onClick={toggleDropdown}>
              {loggedInUser}
            </div>

            {dropdownOpen && (
              <div className="dropdown-menu">

                <Link to="/profile" className="dropdown-item">View profile</Link>
                <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
  
                <Link onClick={handleLogout} className="dropdown-item">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

