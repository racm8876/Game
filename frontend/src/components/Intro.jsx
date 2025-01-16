/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom' 
import './Intro.css'
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const token = localStorage.getItem('token');

  const [GameName, setGameName] = React.useState('Game Name')
  const [Category, setCategory] = React.useState('Category')

  


  const navigate = useNavigate();



  const handleScroll = (path) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };
  

  return (
    <>

    <div className='Intro'>
        <div className="intro-content">
            <div></div>
            <div></div>
            {token ?<Link to="/community" className='intro-button'>JOIN COMMUNITY</Link>:
            <Link to="/login" className='intro-button'>JOIN COMMUNITY</Link>}
            
           
        </div>
      
    </div>
    <div className='intro-bottom'>
      <div className="intro-bottom-content">
        <h1>Login to explore these Adventures</h1>
        <h2>Discover the ultimate destination for gaming enthusiasts! Dive into a variety of exciting games, challenge yourself in competitive tournaments, and explore insightful articles and tips on our blog. Join the community and level up your gaming experience today!</h2>
        <div>
          <Link to="/games" onClick={handleScroll} className="intro-game"><p>GAMES</p></Link>
          <Link to="/blogs" onClick={handleScroll} className="intro-blog"><p>BLOG</p></Link>
          <Link to="/community" onClick={handleScroll} className="intro-tournament"><p>COMMUNITY</p></Link>
        </div>
      </div>
    </div>
    
    <div className="section-gradient"></div>
    <div className="sample-games">
              <h1>Explore Games</h1>
        <div className='game-list'>
          <div className="gameCard">
            <div className="cardImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="game image" /></div>
            <h3>{GameName}</h3>
          </div>
          <div className="gameCard">
            <div className="cardImage"><img src="https://preview.redd.it/halo-5-on-pc-v0-vbj9ktw2z4cc1.jpeg?auto=webp&s=d3ee559a6e6ff499f87c1d8b1108ec4c3f56a03a" alt="game image" /></div>
            <h3>{GameName}</h3>
          </div>
          <div className="gameCard">
            <div className="cardImage"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blte7acaf850e5d532d/67576d548c2c1d7026faad29/OW2_2024_S14-Launch-BNET_SHOP-browsingcard_1920x1080.png" alt="game image" /></div>
            <h3>{GameName}</h3>
          </div>
          <div className="gameCard">
            <div className="cardImage"><img src="https://preview.redd.it/halo-5-on-pc-v0-vbj9ktw2z4cc1.jpeg?auto=webp&s=d3ee559a6e6ff499f87c1d8b1108ec4c3f56a03a" alt="game image" /></div>
            <h3>{GameName}</h3>
          </div>
          <div className="gameCard">
            <div className="cardImage"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blte7acaf850e5d532d/67576d548c2c1d7026faad29/OW2_2024_S14-Launch-BNET_SHOP-browsingcard_1920x1080.png" alt="game image" /></div>
            <h3>{GameName}</h3>
          </div>
          <div className="gameCard">
            <div className="cardImage"><img src="https://preview.redd.it/halo-5-on-pc-v0-vbj9ktw2z4cc1.jpeg?auto=webp&s=d3ee559a6e6ff499f87c1d8b1108ec4c3f56a03a" alt="game image" /></div>
            <h3>{GameName}</h3>
          </div>
          <div className="gameCard">
            <div className="cardImage"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blte7acaf850e5d532d/67576d548c2c1d7026faad29/OW2_2024_S14-Launch-BNET_SHOP-browsingcard_1920x1080.png" alt="game image" /></div>
            <h3>{GameName}</h3>
          </div>
     
          
        </div>
      <div className="section-gradient-end"></div>
        <div className="categories">
          <h1>Categories</h1>
          <div className="category-list">
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            <div className="categoryCard">
              <div className="categoryImage"><img src="https://images.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af.jpg" alt="category image" /></div>
              <h3>{Category}</h3>
            </div>
            
          </div>
            <div className="section-gradient-end"></div>
        </div>
      </div>    
    </>
  )
}

export default Intro
