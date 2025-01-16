import React from "react";
import "../NewsCards/NewsGrid.css";  // for the styling of Game card

function GameCard({ Game }) {
  return (
    <div className="Game-card">
      <img src={Game.image} alt={Game.title} className="Game-image" />
      <div className="Game-content">
        <p className="Game-time">{Game.specs}</p>
        <h3 className="Game-title">{Game.title}</h3>
        <p className="Game-description">{Game.description}</p>
        <a href={Game.link} className="read-more">
          Read more
        </a>
      </div>
    </div>
  );
}

export default GameCard;
