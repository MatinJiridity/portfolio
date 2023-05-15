import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import images from '../../constants/images';
import {AppWrap , MotionWrap} from '../../wrapper'

const About = () => {
  const about = [
    {title: 'BlockChain Development', describtion: 'I am experienced blockchain developer.', url: images.eth},
    {title: 'Frontend Development', describtion: 'I am good frontend developer.', url: images.about01},
    {title: 'UI/UX Development', describtion: 'I am good UI/UX developer.', url: images.about02},
  ]
  return (
    <>
      <h2 className='head-text'>I Know that <span>Good Apps</span><br/> meant <span>Good Business</span></h2>

      <div className='app__profiles'>
        {about.map((about, index) => (
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type: 'tween'}}
            className='app__profiles-item'
            key={about.title+index}
          >
            <img src={about.url} alt='about'/>
            <h2 className='bold-text' style={{marginTop:'20px'}}>{about.title}</h2>
            <h2 className='p-text' style={{marginTop:'10px'}}>{about.describtion}</h2>
            
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
  )