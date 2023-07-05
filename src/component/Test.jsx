import React, { useEffect, useState } from 'react'
import './Test.css'
import data from './data'


const Test=() =>{
  const [people] = useState (data);
  const[index, setIndex] = useState(0);

  useEffect(() =>{
  const lastIndex = people.length - 1;
  if (index < 0){
    setIndex(lastIndex);
  }
  if(index > lastIndex){
    setIndex(0);
  }
  }, [index, people]);
  useEffect(() =>{
    let slider = setInterval(() => {
      setIndex(index + 1);

    }, 5000);
    return () =>{
      clearInterval(slider);
    }
  }, [index]);
  
  
  return (
    <section className= 'sectionn'>
      <div className='titll'>
        <h2>Top Leader</h2>
      </div>
      <div className='section-center'>
        {data.map((item, indexdata) =>{
          const {id, image, name, title, quote} = item;
           let position = "nextslide";
           if (indexdata === data){
            position = "activeSlide"
           }
           if(indexdata === index -1 || (index ===0 && indexdata === data.length - 1)){
            position = "lastSlide";
           }
           return (
            <article className={position} key={id}>
          <img src={image} alt={name} className="data-img" />
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <p className='text'>{quote}</p>
            </article>
           );
        })}
      </div>
    </section>
  )
}

export default Test