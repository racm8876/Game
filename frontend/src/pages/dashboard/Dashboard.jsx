/* eslint-disable no-unused-vars */
import React from "react";
import "./Dashboard.css";
import { useEffect } from "react";

const Dashboard = () => {
  const [userLogins, setUserLogins] = React.useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/userDetail`)
    .then(res => res.json())
    .then(res => setUserLogins(res))
    .catch(err => console.error("Fetch error:", err));
    // console.log(userLogins)
  })

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        {/* <p>Your hub for the latest gaming updates, tournaments, and events!</p> */} 
      </header>

      <div className="dashboard-content">
        {/* Announcements Section */}
        <section className="dashboard-section announcements">
          <h2>Announcements</h2>
          <ul>
            <li>🎮 New tournament coming this weekend! Register now.</li>
            <li>🔥 Exclusive rewards for top leaderboard players this month.</li>
            <li>🛠️ Scheduled maintenance on January 15th, 2:00 AM to 5:00 AM.</li>
          </ul>
        </section>

        {/* Active Players Section */}
        <section className="dashboard-section active-players">
          <h2>Active Players</h2>
          <p>
            Currently online: <span className="active-count">253</span> players
          </p>
        </section>

        {/* Leaderboard Section */}
        <section className="dashboard-section leaderboard">
          <h2>Top Players</h2>
          <ol>
            <li>🔥 PlayerOne - 4520 XP</li>
            <li>⚡ ShadowHunter - 4310 XP</li>
            <li>💎 MysticWarrior - 3985 XP</li>
          </ol>
        </section>

        {/* Upcoming Events Section */}
        <section className="dashboard-section events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>🌟 Clan War - January 20th</li>
            <li>🏆 Solo Championship - January 28th</li>
            <li>🎉 Community Meetup - February 5th</li>
          </ul>
        </section>


        {/* Gaming Tips Section */}
        <section className="dashboard-section gaming-tips">
          <h2>Pro Gaming Tips</h2>
          <ul>
            <li>🎯 Aim training exercises to improve accuracy.</li>
            <li>💻 Optimize PC settings for better FPS and performance.</li>
            <li>🤝 Communication is key: Use team chat effectively.</li>
          </ul>
        </section>

        {/* Featured Games Section */}
        <section className="dashboard-section featured-games">
          <h2>Featured Games</h2>
          <div className="featured-game-grid">
            <div className="featured-game">Valorant</div>
            <div className="featured-game">League of Legends</div>
            <div className="featured-game">Minecraft</div>
            <div className="featured-game">Fortnite</div>
          </div>
        </section>
      </div>
      <hr />
        {/* Login Activity Section */}
        <section className="dashboard-section ">
          <h2>Login Activity</h2>
          <p>Recent logins:</p>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Login time</th>
              </tr>
            </thead>
            <tbody>
              {userLogins.map((user, index) => (
                <tr key={index}>
                  <td>🔑 {user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
    </div>
  );
};

export default Dashboard;
