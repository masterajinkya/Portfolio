import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import About from '../pages/About'
import Experiance from '../pages/Experiance';
import Contact from '../pages/Contact';


function NavBar() {

  const handleContactClick = () => {
    const emailAddress = 'ajinkyagiri62@gmail.com';
    const subject = 'Interested in contacting you';
    const body = 'Hello, I would like to get in touch with you.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // using useRef for scroll to component

  const component1Ref = useRef(null);
  const component2Ref = useRef(null);
  const component3Ref = useRef(null);

  const scrollToComponent = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <div className='container'>
        <nav className=' navbar fixed-top '>
          <img src="https://i.ibb.co/rxWh5YN/portfolio.png" className='img-fluid' />
          <ul className='p-0'>
            <li><a onClick={() => scrollToComponent(component1Ref)} className=''>About</a></li>
            <li><a onClick={() => scrollToComponent(component2Ref)} className=' mx-4 mx-sm-5'>Experience</a></li>
            <li><a onClick={() => scrollToComponent(component3Ref)} className=''>Contact</a></li>
          </ul>
          <button onClick={handleContactClick} className='btn btn-warning d-none d-md-block'>Contact Me</button>
        </nav>
        <div ref={component1Ref} ><About /></div>
        <div ref={component2Ref}><Experiance /></div>
      </div>
      <div ref={component3Ref}><Contact id='contact' /></div>
    </>
  )
}

export default NavBar
