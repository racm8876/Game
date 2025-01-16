import React, { useState ,useEffect} from "react";
// import "../authentication/auth.css";

import "./UpdateProfile.css";
import { handleSuccess } from "../../utils";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("loggedInUserId");
  const [updateInfo, setUpdateInfo] = useState({ name: "", email: "" });

  useEffect(() => {
    // Fetch existing user details to populate the form
    if (userId) {
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/auth/updateUser/${userId}`,{
        method:"PUT",
      })
        .then((res) => res.json())
        .then((data) => setUpdateInfo({ name: data.name, email: data.email }))
        .catch((err) => console.error("Error fetching user details:", err));
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateInfo({ ...updateInfo, [name]: value });
  };

  const handleUpdatesProfile = (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("User ID not found");
      return;
    }

    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/auth/updateUser/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("User details updated successfully:", res);
        handleSuccess("Details updated successfully!");
        localStorage.setItem("loggedInUser", updateInfo.name);
        navigate("/profile");
        window.location.reload();
      })
      .catch((err) => console.error("Error updating user details:", err));
  };

  return (
    <div className="update-profile-container">
      <h1>Update Your Profile</h1>
      <form onSubmit={handleUpdatesProfile}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={updateInfo.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={updateInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
