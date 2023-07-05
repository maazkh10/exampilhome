import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './Login.css';
import Poster1 from'../assets/poster1.webp'
import Poster2 from '../assets/Poster2.png'
import Poster3 from '../assets/poster3.webp'

function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [year, setYear] = useState(2023);
  
  const incrementYear = () => {
    setYear(year + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
}

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    body: {
      
      x: mousePosition.x - 500,
      y: mousePosition.y - 500,
      backgroundColor: "black",
      mixBlendMode: "difference"
    },
    text: {
      
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        backgroundColor: "black",

        
      }
  }
    
  const textEnter = () => setCursorVariant("body");

  const textLeave = () => setCursorVariant("default");


  return (
    <>
    <div className="App">
      
      <h2 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>Crack Neet</h2>
        
        <p>
        <span className="no-line-break">Rising to the top with the guidance of the best</span>
        </p>
        <div className='img-container'>
        <img className='poster1' src={Poster1} alt='' />
        <img className='poster2' src={Poster2} alt='' />
        <img className='poster3' src={Poster3} alt='' />

        </div>
        <div className='increment'>
          <span>{year}
          <button className='bnt1'  onClick={incrementYear}></button>
          </span>
        
         
   console.log(incrementYear);          
        </div>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        
      />
      <div className="auth-form-container">
            <h2></h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path className="elementor" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"/>
	<path className="elementor" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"/>
	<path className="elementor" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"/>
</svg>	
    </>
  );
}

export default Login;