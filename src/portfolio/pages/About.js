import React from 'react'

function About() {

  const handleContactClick = () => {
    const emailAddress = 'ajinkyagiri62@gmail.com';
    const subject = 'Interested in contacting you';
    const body = 'Hello, I would like to get in touch with you.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className='about'>
        <div className='row about-dec '>
          <div className='col-6 col-sm-6'>
            <div className='about-discription '>
              <div>
                <h2>I'M <br className='d-sm-none'></br><span>Ajinkya Giri</span> <br></br> React Developer & Web Developer</h2>
                <button onClick={handleContactClick} className='btn btn-warning  mt-2 mt-sm-5'>Contact Me</button>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-6 '>
            <img src='https://i.ibb.co/2nq3xhX/IMG-20231202-091358-removebg-1.png' className='img-fluid ' />
          </div>
        </div>
        <div className='summry'>
          <h1>About</h1>
          <ol>
            <li>2.10+ years of experience in Frontend Development</li>
            <li>Design and develop user interface components using React.js</li>
            <li>Thorough understanding of React.js and its core principles</li>
            <li>Optimize components for maximum performance across a vast array of
              web-capable devices and browsers</li>
            <li> Collaborate with other team members and stakeholders</li>
            <li>Ability to understand business requirements and translate them into technical requirements
            </li>
            <li>Proficient understanding of web markup, including HTML5, CSS3 </li>
            <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
            <li>Stay up-to-date with emerging technologies and frameworks</li>
          </ol>
        </div>
      </div>
      <div className='skills'>
        <h1>My Skills</h1>
        <div className='row'>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/NFspmcq/react.png' className='img-fluid' />
              <h3 className='mt-4 text-white'>React.js</h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/sWHX1s6/js.png' className='img-fluid' />
              <h3 className='mt-4 text-white'>JavaScript</h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/NrztPqS/html-5.png' className='img-fluid' />
              <h3 className='mt-4 text-white'>HTML5</h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/GswyS8K/redux.png' className='img-fluid' />
              <h3 className='mt-4 text-white'>Redux.js</h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/x649YXJ/mui.png' className='img-fluid' />
              <h3 className='mt-4 text-white'>Material UI</h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/f8JfKTp/npm.png' className='img-fluid' />
              <h3 className='mt-4 text-white'>NPM </h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/yPshPsf/bootstrap.png' className='img-fluid' />
              <h3 className='mt-4 text-white'>BootStrap </h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/rFgVNgw/css-3.png' className='img-fluid' />
              <h3 className='mt-4 text-white'>CSS3 </h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/c6QMJY5/es6.png' className='img-fluid my-3' />
              <h3 className='mt-4 text-white'>ECMA </h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/JnzJQDN/sass-5.png' className='img-fluid' />
              <h3 className='mt-4 text-white'>SASS </h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/Lpp2RQv/github.png' className='my-3img-fluid' />
              <h3 className='mt-4 text-white'>GitHub </h3>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3'>
            <div className='skills-card'>
              <img src='https://i.ibb.co/2dK2Ng3/tailwind.png' className='my-3img-fluid' />
              <h3 className='mt-4 text-white'>Tailwind </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About;

