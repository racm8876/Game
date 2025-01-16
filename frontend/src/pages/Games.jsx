/* eslint-disable no-unused-vars */
import React from 'react'
import './pages.css'
import GameCard from "./GameCards/GameCard";

const GameData = [
  {
    image: "https://blix.gg/wp-content/uploads/2024/10/711428431872d6d8.jpeg",
    title: "Delta Force: Tactical Combat Redefined",
    specs: "Platform: PC, Genre: FPS, Developer: Team Jade, Release Date: TBA",
    description: "Experience an elite shooter game designed to rival blockbuster hits. Engage in intense tactical combat with advanced AI and multiplayer options.",
    link: "#",
  },
  {
    image: "https://cdn2.unrealengine.com/screenshot-2025-01-08-160817-1687x943-3bca9f55b4ec.png",
    title: "Astro Bot, Helldivers 2, Indiana Jones Nominations",
    specs: "Platform: PC/Console, Genre: Action/Adventure, Developers: Various, Release: 2025",
    description: "A tie for Game of the Year nominations featuring Astro Bot, Helldivers 2, and Indiana Jones among others.",
    link: "#",
  },
  {
    image: "https://cdn2.unrealengine.com/mechwarrior-5-clans-key-art-3600x2200-330073fda75e.jpg",
    title: "Tails of Iron 2: Whiskers of Winter",
    specs: "Platform: PC, Genre: RPG, Developer: Odd Bug Studio, Release Date: Q3 2025",
    description: "The fantasy epic continues as Odd Bug Studio dives into inspiration from pet rats to build a compelling narrative-driven RPG.",
    link: "#",
  },
  {
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1727384525",
    title: "Starfield: Explore the Infinite Universe",
    specs: "Platform: PC/Xbox, Genre: Sci-Fi RPG, Developer: Bethesda, Release Date: Available Now",
    description: "Immerse yourself in Bethesda's epic space exploration game featuring countless planets and deep storytelling.",
    link: "#",
  },
  {
    image: "https://www.psu.com/wp/wp-content/uploads/2024/02/Is-Forza-Motorsport-Coming-To-PS5-e1707514570295.jpg",
    title: "Forza Motorsport 2023",
    specs: "Platform: PC/Xbox, Genre: Racing, Developer: Turn 10 Studios, Release Date: 2023",
    description: "Experience cutting-edge racing with hyper-realistic graphics and dynamic weather conditions in the latest Forza installment.",
    link: "#",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/BeyhFdCM2ugLQjX8vX7fuQ.jpg",
    title: "Cyberpunk 2077: Phantom Liberty Expansion",
    specs: "Platform: PC/Console, Genre: Action RPG, Developer: CD Projekt Red, Release Date: Available Now",
    description: "Delve deeper into Night City's chaos with new missions, characters, and weapons in the Phantom Liberty expansion.",
    link: "#",
  },
  {
    image: "https://cdn-l-thewitcher.cdprojektred.com/meta/TW3NG_thumbnail_en.png",
    title: "The Witcher 3: Wild Hunt Next-Gen Update",
    specs: "Platform: PC/Console, Genre: RPG, Developer: CD Projekt Red, Release Date: Available Now",
    description: "Experience the legendary journey of Geralt of Rivia with enhanced visuals and gameplay improvements.",
    link: "#",
  },
  {
    image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/dying-light-2-nvidia-dlss-ray-tracing/dying-light-2-out-now-with-rtx-dlss-ogimage.jpg",
    title: "Dying Light 2: Bloody Ties DLC",
    specs: "Platform: PC/Console, Genre: Action RPG, Developer: Techland, Release Date: Available Now",
    description: "Survive in a post-apocalyptic world with thrilling combat and a new arena-based expansion.",
    link: "#",
  },
  {
    image: "https://www.guerrilla-games.com/media/News/HFW-release-date-2560w.webp?width=1200&height=630&rmode=crop",
    title: "Horizon Forbidden West: Burning Shores Expansion",
    specs: "Platform: PC/Console, Genre: Action RPG, Developer: Guerrilla Games, Release Date: Available Now",
    description: "Explore a post-apocalyptic landscape filled with robotic beasts and uncover new mysteries in the Burning Shores expansion.",
    link: "#",
  },
  {
    image: "https://www.minecraft.net/content/dam/minecraftnet/games/badger/screenshots/Minecraft_Legends_TU2-NovemberUpdate_Trailer_Thumbnail_2MB.png",
    title: "Minecraft Legends",
    specs: "Platform: PC/Console, Genre: Strategy, Developer: Mojang Studios, Release Date: 2023",
    description: "Lead your allies in strategic battles to save the Overworld from the invading piglins.",
    link: "#",
  }
  
];



const Games = () => {

  const token = localStorage.getItem('token')

  return (
    <>
    

      <div className="page-container">
        <div className="page-heading">
      <h1>Explore Games</h1>
      {token ? 
        <div className="Game-grid">
        {GameData.map((Game, index) => (
          <GameCard key={index} Game={Game} />
        ))}
      </div>
      : <p>Please Login to see games.</p>}
      
    </div>
    </div>
    
    </>
  )
}

export default Games
