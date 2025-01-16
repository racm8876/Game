import React from "react";
import "./Community.css";

const Community = ({ member }) => (
  <div className="card">
    <img src={member.image} alt={`${member.name}'s avatar`} />
    <h3>{member.name}</h3>
    <p>{member.role}</p>
    <div className="badges">
      {member.badges.map((badge, index) => (
        <span key={index} className={`badge ${badge}`}></span>
      ))}
    </div>
  </div>
);

export default Community;
