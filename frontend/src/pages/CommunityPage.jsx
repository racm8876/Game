/* eslint-disable no-unused-vars */
import React from "react";
import "./Community/Community.css";
import Community from "./Community/Community";
import "./pages.css";
import { useState } from "react";

const membersData = [
  {
    name: "Saurabh Shandilya",
    role: "Community Lead",
    points: { lightning: 10, diamond: 5, heart: 2 },
    image: "https://i.ibb.co/pLfw0t7/Whats-App-Image-2025-01-15-at-14-08-33-bfc01a5d.jpg",
    badges: ["medal", "plus"],
  },
  {
    name: "Ram Chandra",
    role: "Hardware",
    points: { lightning: 7, diamond: 3, heart: 1 },
    image: "https://i.ibb.co/frqp4mc/IMG-20241223-WA0018.jpg",
    badges: ["medal", "plus"],
  },
  {
    name: "Kushang",
    role: "Guides",
    points: { lightning: 12, diamond: 6, heart: 4 },
    image: "https://i.ibb.co/7yjvJ2v/IMG-20241223-WA0019.jpg",
    badges: ["medal", "plus"],
  },
  {
    name: "Prashant",
    role: "Design",
    points: { lightning: 8, diamond: 4, heart: 3 },
    image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_fortnite_character_isolated_on_white_background_-styl_2a9ed7c0-a0d3-4d44-95d1-e191463730e9_0-photoroom.png",
    badges: ["medal", "plus"],
  },
  {
    name: "Vernon Dahmer",
    role: "Guides",
    points: { lightning: 15, diamond: 7, heart: 5 },
    image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_fortnite_character_isolated_on_white_background_-styl_2a9ed7c0-a0d3-4d44-95d1-e191463730e9_0-photoroom.png",
    badges: ["medal", "plus"],
  },
  {
    name: "Siobhan Millavic",
    role: "Guides",
    points: { lightning: 11, diamond: 3, heart: 6 },
    image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_fortnite_character_isolated_on_white_background_-styl_2a9ed7c0-a0d3-4d44-95d1-e191463730e9_0-photoroom.png",
    badges: ["medal", "plus"],
  },
  {
    name: "Taba Carew",
    role: "Developer",
    points: { lightning: 18, diamond: 8, heart: 9 },
    image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_fortnite_character_isolated_on_white_background_-styl_2a9ed7c0-a0d3-4d44-95d1-e191463730e9_0-photoroom.png",
    badges: ["medal", "plus"],
  },
  {
    name: "Wynonn Judd",
    role: "Support",
    points: { lightning: 5, diamond: 2, heart: 0 },
    image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_fortnite_character_isolated_on_white_background_-styl_2a9ed7c0-a0d3-4d44-95d1-e191463730e9_0-photoroom.png",
    badges: ["medal"],
  },
  // {
  //   name: "Francis Beauregard",
  //   role: "Community Manager",
  //   points: { lightning: 22, diamond: 10, heart: 12 },
  //   image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_fortnite_character_isolated_on_white_background_-styl_2a9ed7c0-a0d3-4d44-95d1-e191463730e9_0-photoroom.png",
  //   badges: ["medal", "star"],
  // },
  // {
  //   name: "Alexandra Trent",
  //   role: "Moderator",
  //   points: { lightning: 14, diamond: 6, heart: 3 },
  //   image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_fortnite_character_isolated_on_white_background_-styl_2a9ed7c0-a0d3-4d44-95d1-e191463730e9_0-photoroom.png",
  //   badges: ["star", "plus"],
  // },
  // {
  //   name: "Zara Lennox",
  //   role: "Marketing",
  //   points: { lightning: 9, diamond: 4, heart: 2 },
  //   image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_fortnite_character_isolated_on_white_background_-styl_2a9ed7c0-a0d3-4d44-95d1-e191463730e9_0-photoroom.png",
  //   badges: ["medal", "plus"],
  // },
  // {
  //   name: "Omar Rivera",
  //   role: "Security Specialist",
  //   points: { lightning: 16, diamond: 9, heart: 5 },
  //   image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_fortnite_character_isolated_on_white_background_-styl_2a9ed7c0-a0d3-4d44-95d1-e191463730e9_0-photoroom.png",
  //   badges: ["shield", "medal"],
  // },
];





const CommunityPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const token = localStorage.getItem("token");


  return (
    <div className="community-page">
      {/* Page Heading */}
      <div className="page-heading">
        <h1>Community Members</h1>


      <div className="community-layout">
        {/* Sidebar */}
        <div className={`sidebar ${showSidebar ? "active" : ""}`}>
          <h2>Points</h2>
          <div className="points-section">
            <div className="points-item">
              <span>⚡ Lightning Points:</span> <span>0</span>
            </div>
            <div className="points-item">
              <span>💎 Diamond Points:</span> <span>0</span>
            </div>
            <div className="points-item">
              <span>❤️ Heart Points:</span> <span>0</span>
            </div>
          </div>

          <h2>Achievements</h2>
          <div className="achievements-section">
            <div className="achievement-item">🏆 Medal</div>
            <div className="achievement-item">➕ Plus Badge</div>
          </div>

          <h3>Online Members</h3>
          <p>There are no users</p>
        </div>


        {/* Member Cards Section */}
        <div className="member-cards-container">
          {token ? (
            <div className="member-cards">
              {membersData.map((member, index) => (
                <Community key={index} member={member} />
              ))}
            </div>
          ) : (
            <p>Please Login to see blogs.</p>
          )}
        </div>
      </div>
      </div>

      

    </div>
  );
};

export default CommunityPage;