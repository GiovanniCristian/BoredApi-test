import React from 'react';
import image from '../../images/header.png';
import "./Home.scss"
import {Link} from "react-router-dom"

const Home = () => {
  return (
  <>
    <section>
      <div
        className='background'
        style={{
          backgroundImage:`url(${image})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPosition:"center",
          height: 500
        }}
      >
        <h1>Are you looking for a funny activity?</h1>
      </div>
      <div className='body-header'>
        <p>I don't know if this is the right place for you, certainly better than nothing. Try to find something that suits you, if you feel like it.</p>
        <p>What are you waiting for? Select an <Link to="/searchPage" className='home-link'>Activity</Link> now!</p>
      </div>
    </section>
    <footer>
      <ul>
        <li><a href='https://www.linkedin.com/in/giovanni-cristian-marrocco/'>Linkedin</a></li>
        <li><a href='https://www.instagram.com/darsena_music/'>Instagram</a></li>
        <li><a href='https://open.spotify.com/artist/1BeDagLSzc3lMXJm0NSKNV?si=hlpRn0HdQx-e2C2_eMca_w'>Spotify</a></li>
        <li><a href="mailto:marroccogc@gmail.com">Mail</a></li>
      </ul>
    </footer>
  </>
  )
}

export default Home