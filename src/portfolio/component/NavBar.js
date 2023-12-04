import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import About from '../pages/About'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Experiance from '../pages/Experiance';
import Contact from '../pages/Contact';


function NavBar() {
  const navigate = useNavigate()


  const handleClick =()=>{
    navigate("/")
  }

  const handleContactClick = () => {
    const emailAddress = 'ajinkyagiri62@gmail.com'; // Replace with your email address
    const subject = 'Interested in contacting you'; // Replace with your desired email subject
    const body = 'Hello, I would like to get in touch with you.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const component1Ref = useRef(null);
  const component2Ref = useRef(null);
  const component3Ref = useRef(null);


  const scrollToComponent = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    <div className='container'>

      <nav  onClick={handleClick}  className=' navbar fixed-top '>
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className='img-fluid' />
        <ul className=''>
          <li><button onClick={() => scrollToComponent(component1Ref)} className='btn'>About</button></li>
          <li><button onClick={() => scrollToComponent(component2Ref)} className='btn mx-2 mx-sm-3'>Experience</button></li>
          <li><button onClick={() => scrollToComponent(component3Ref)} className='btn'>Contact</button></li>
        </ul>
        <button onClick={handleContactClick} className='btn btn-warning d-none d-md-block'>Contact Me</button>
      </nav>

      <div ref={component1Ref}><About  /></div>
      <div ref={component2Ref}><Experiance  /></div>
    </div>
    <div ref={component3Ref}><Contact id='contact' /></div>

      </>
  )
}

export default NavBar
