import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import About from '../pages/About'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Experiance from '../pages/Experiance';
import Contact from '../pages/Contact';


function NavBar() {
  const navigate = useNavigate()
  const handleContactClick = () => {
    const emailAddress = 'ajinkyagiri62@gmail.com'; // Replace with your email address
    const subject = 'Interested in contacting you'; // Replace with your desired email subject
    const body = 'Hello, I would like to get in touch with you.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };


  const handleAbout = () => {
    scroll.scrollTo(500, { smooth: true }); // Adjust the value as needed
  };
  const handleExp = () => {
    scroll.scrollTo(2250, { smooth: true }); // Adjust the value as needed
  };
  const handlecontact = () => {
    scroll.scrollTo(3500, { smooth: true }); // Adjust the value as needed
  };






  return (
    <>
    <div className='container'>

      <nav  onClick={handleAbout}  className=' navbar fixed-top '>
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className='img-fluid' />
        <ul className=''>
          <li><button onClick={handleAbout} className='btn'>About</button></li>
          <li><button onClick={handleExp} className='btn mx-3'>Experience</button></li>
          <li><button onClick={handlecontact} className='btn'>Contact</button></li>
        </ul>
        <button onClick={handleContactClick} className='btn btn-warning d-none d-md-block'>Contact Me</button>
      </nav>
      <About id="about" />
      <Experiance id="experiance" />
    </div>
      <Contact id='contact' />
      </>
  )
}

export default NavBar
