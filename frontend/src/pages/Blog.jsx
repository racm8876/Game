import React from 'react'
import NewsCard from "./NewsCards/NewsCard";
import "./NewsCards/NewsGrid.css";
import './pages.css'


const newsData = [
  {
    image: "https://blix.gg/wp-content/uploads/2024/10/711428431872d6d8.jpeg",
    title: "How Delta Force sets its sights on established blockbuster shooters",
    time: "5h ago",
    description:
      "Read the behind-the-scenes story of how Team Jade organized a team of elite shooter designers...",
    link: "#",
  },
  {
    image: "https://cdn2.unrealengine.com/screenshot-2025-01-08-160817-1687x943-3bca9f55b4ec.png",
    title:
    "Astro Bot, Helldivers 2, Indiana Jones in three-way tie for DICE nominations",
    time: "3d ago",
    description:
    "All three games were nominated for Game of the Year, along with Balatro and Black Myth: Wukong.",
    link: "#",
  },
  {
    image: "https://cdn2.unrealengine.com/mechwarrior-5-clans-key-art-3600x2200-330073fda75e.jpg",
    title: "Tails of Iron 2: Whiskers of Winter Announced",
    time: "1h ago",
    description:
      "Odd Bug discusses how pet rats inspired Tails of Iron’s fantasy epic.",
    link: "#",
  },
  {
    image: "https://cdn2.unrealengine.com/mechwarrior-5-clans-key-art-3600x2200-330073fda75e.jpg",
    title: "Tails of Iron 2: Whiskers of Winter Announced",
    time: "1h ago",
    description:
      "Odd Bug discusses how pet rats inspired Tails of Iron’s fantasy epic.",
    link: "#",
  },
  {
    image: "https://cdn2.unrealengine.com/mechwarrior-5-clans-key-art-3600x2200-330073fda75e.jpg",
    title: "Tails of Iron 2: Whiskers of Winter Announced",
    time: "1h ago",
    description:
      "Odd Bug discusses how pet rats inspired Tails of Iron’s fantasy epic.",
    link: "#",
  },
  {
    image: "https://cdn2.unrealengine.com/mechwarrior-5-clans-key-art-3600x2200-330073fda75e.jpg",
    title: "Tails of Iron 2: Whiskers of Winter Announced",
    time: "1h ago",
    description:
      "Odd Bug discusses how pet rats inspired Tails of Iron’s fantasy epic.",
    link: "#",
  },
];






const News=()=> {

  const token = localStorage.getItem("token");
  
  return (
    <>
      {/* <p>Please Login to see blogs.</p> */}

      
      <div className="page-heading">
      <h1>Game Community News</h1>
      {token ?  <div className="news-grid">
        {newsData.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
      : <p>Please Login to see blogs.</p>}
      
    </div>
    </>
  );
}

export default News
