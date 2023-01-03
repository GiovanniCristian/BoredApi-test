import React from 'react';
import image from '../../images/header.png';
import "./Home.scss"

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
        <p>I don't know if this is the right place for you, certainly better than nothing. Try to find an activity that suits you, if you feel like it.</p>
        <p>Sure...</p>
      </div>
    </section>
    <footer>
    <p>Designed By: Giovanni Cristian Marrocco</p>
    </footer>
  </>
  )
}

export default Home