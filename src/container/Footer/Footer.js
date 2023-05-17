import React, { useState } from 'react';
import './Footer.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    }


  }


  return (
    <>
      <h2 className='head-text'>Contact <span>Me</span></h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='card' />
          <a href='mailto:matinjiri.git@gmail.com' className="p-text">matinjiri.git@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='card' />
          <a href='tel:+989103980355' className="p-text">+989103980355</a>
        </div>
      </div>

      {!isFormSubmited ?
        <div className="app__footer-form app__flex">
          <div className='app__felx'>
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className='app__felx'>
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
          <button type="button" className="p-text" onClick={handleSubmit} >Send Message</button>
        </div>
        : <div>
          <h3 className='head-text'>Thank you for getting in touch</h3>
        </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)