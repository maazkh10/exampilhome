import React from 'react'
import './Subject.css'
import Phys from '../assets/phys.webp'
import Bio from '../assets/bio.webp'
import Chem from '../assets/chem.webp'
function Subjetcs() {
  return (
    <div className='container'>
      <div className='subs'>
        <h1>Learn from the Toppers</h1>
        <span>Shop our topper handwritten notes only on Exampil. Grab your copy now!!</span>
      </div>
      <div className="image-container">
        <img src={Bio} />
        <img src={Phys} />
        <img src={Chem} />
      </div>
    </div>
  )
}

export default Subjetcs