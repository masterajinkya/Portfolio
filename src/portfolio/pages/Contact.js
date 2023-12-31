import React from 'react'

function Contact() {
  const handleContactClick = () => {
    const emailAddress = 'ajinkyagiri62@gmail.com';
    const subject = 'Interested in contacting you';
    const body = 'Hello, I would like to get in touch with you.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  const handleWhatsapp = () => {
    const phoneNumber = '9112127187'; // Replace with the desired WhatsApp number

    // Use window.location.href to navigate to the WhatsApp chat
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <footer className='contact-me container-fluid'>
      <h1>Contact Me</h1>
      <div className='contact'>
        <button onClick={handleContactClick} className='btn btn-warning  mt-3 mr-3'><i class="fa-regular fa-envelope mx-2"></i>ajinkyagiri62@gmail.com</button>
        <button onClick={handleWhatsapp} className='btn btn-warning  mt-3 '><i class="fa-brands fa-whatsapp mx-2"></i>What'sApp</button>
        <button className='btn btn-warning  mt-3 ml-3'><i class="fa fa-phone mx-2 " aria-hidden="true "></i>(+91) 7888107402</button>
      </div>
    </footer>

  )
}

export default Contact
