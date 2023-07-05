import React from 'react'
import './Slide.css'
import card1  from '../assets/card1.webp'
import card2  from '../assets/card2.jpg'
import card3  from '../assets/card3.png'
import card4  from '../assets/card4.webp'
  function Cardslid() {
  return (
    <>
    <div className='cardslid'>
        <h1 className=''>For the Toppers, By the Toppers, Of the Toppers.</h1>
        <p>Ace your NEET preparations with carefully created notes, flashcards, video concepts etc prepared by NEET toppers.
           <br></br> scroll on cards please!!!! 
        </p>
    </div>
    <span>scrol here</span>
    <div className='conteudo'>
        
        <div className='carrousel'>
            
            <article className='card'>
                <img src={card1} />
            </article>
            <article className='card'>
                <img src={card2} />
            </article>
            <article className='card'>
                <img src={card3} />
            </article>
            <article className='card'>
                <img src={card4} />
            </article>
        </div>
    </div>
    </>

  )
}

export default Cardslid