import React from "react";
import "./NewsGrid.css";  // for the styling of news card

function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title} className="news-image" />
      <div className="news-content">
        <p className="news-time">{news.time}</p>
        <h3 className="news-title">{news.title}</h3>
        <p className="news-description">{news.description}</p>
        <a href={news.link} className="read-more">
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
