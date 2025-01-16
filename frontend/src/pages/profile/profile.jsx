/* eslint-disable no-unused-vars */
// import React from "react";
import "./profile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";

export const Profile = () => {
  const userId = localStorage.getItem("loggedInUserId");
  const [loggedInUser, setLoggedInUser] = useState("");
  const [status, setStatus] = useState("offline");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user);
    if (user) setStatus("active");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUserId");
    handleSuccess("User Logout");
    setStatus("offline");
    setTimeout(() => navigate("/login"), 1000);
  };

  const handleDeleteAndLogout = () => {
    if (!userId) {
      console.error("User ID not found");
      return;
    }

    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUserId");

    handleSuccess("User Logout");
    setStatus("offline");

    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/auth/deleteUser/${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log({ message: "User Deleted", res }))
      .catch((err) => console.error("Error deleting user:", err));

     setTimeout(() => {
        navigate("/login");
        window.location.reload();
    }, 1000);
};
  };
  
// gaming section 
const games = [
    {
      name: "Dota 2",
      genre: "Sandbox",
      dateAdded: "24/08/2036",
      hoursPlayed: "634 H 22 Mins",
      status: "Downloaded",
      image: "https://i.ibb.co/xG87zqH/popular-05.jpg", // Replace with actual image URL
    },
    {
      name: "Fortnite",
      genre: "Sandbox",
      dateAdded: "22/06/2036",
      hoursPlayed: "745 H 12 Mins",
      status: "Downloaded",
      image: "https://i.ibb.co/jGv7kWQ/popular-04.jpg", // Replace with actual image URL
    },
    {
      name: "CS-GO",
      genre: "Sandbox",
      dateAdded: "21/04/2022",
      hoursPlayed: "632 H 46 Mins",
      status: "Downloaded",
      image: "https://i.ibb.co/KN1Qcx0/popular-03.jpg", // Replace with actual image URL
    },
  ];

  
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <img
            className="profile-image"
            src="https://i.ibb.co/2ZwKFGk/profile.jpg"
            alt="Profile"
          />
          <div className="profile-details">
            <span className={`status ${status}`}>{status === "active" ? "Active" : "Offline"}</span>
            <h2>Welcome, {loggedInUser}</h2>
            <p>
              You haven&apos;t gone live yet. Go live by touching the button
              below.
            </p>
            <button className="live-button" onClick={() => navigate("/update-profile")}> Edit Profile</button>
            <button className="live-button" onClick={handleDeleteAndLogout}>Delete Account</button>
            <button className="live-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className="profile-stats">
          <ul>
            <li>
              <span>Games Downloaded</span>
              <strong>3</strong>
            </li>
            <li>
              <span>Friends Online</span>
              <strong>16</strong>
            </li>
            <li>
              <span>Live Streams</span>
              <strong>None</strong>
            </li>
            <li>
              <span>Clips</span>
              <strong>29</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* Clips Section */}
      <div className="clips-section">
        <h2>
          Your Most Popular <strong style={{ color: '#ff5a85' }}>Clips</strong>
        </h2>
        <div className="clips-grid">
          <div className="clip-card">
            <img src="https://i.ibb.co/xq2cF6H/clip-01.jpg" alt="First Clip" />
            <h3>First Clip</h3>
            <span>250 views</span>
          </div>
          <div className="clip-card">
            <img src="https://i.ibb.co/kJCfCd4/clip-02.jpg" alt="Second Clip" />
            <h3>Second Clip</h3>
            <span>183 views</span>
          </div>
          <div className="clip-card">
            <img src="https://i.ibb.co/fpqYbHM/clip-03.jpg" alt="Third Clip" />
            <h3>Third Clip</h3>
            <span>141 views</span>
          </div>
          <div className="clip-card">
            <img src="https://i.ibb.co/5n5bTst/clip-04.jpg" alt="Fourth Clip" />
            <h3>Fourth Clip</h3>
            <span>91 views</span>
          </div>
        </div>
        <button className="load-more">Load More Clips</button>
      </div>
      {/* Gaming section  */}
      <div className="gaming-library-container">
      <h2>
        Your Gaming <strong style={{ color: '#ff5a85' }}>Library</strong>
      </h2>
      <div className="gaming-library">
        {games.map((game, index) => (
          <div key={index} className="game-row">
            <div className="game-info">
              <img src={game.image} alt={game.name} className="game-image" />
              <div>
                <h3>{game.name}</h3>
                <p>{game.genre}</p>
              </div>
            </div>
            <p className="game-detail">{game.dateAdded}</p>
            <p className="game-detail">{game.hoursPlayed}</p>
            {/* <p className="game-detail">{game.status}</p> */}
            <button className="download-button">{game.status}</button>
          </div>
        ))}
      </div>
    </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
