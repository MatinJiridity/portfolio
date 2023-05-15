import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import images from '../../constants/images';

const Skills = () => {
  const skills = [
    { name: 'React', bgColor: '#edf2f8', icon: images.react },
    { name: 'Web3', bgColor: '#edf2f8', icon: images.web3 },
    { name: 'Redux', bgColor: '#edf2f8', icon: images.redux },
    { name: 'Solidity', bgColor: '#edf2f8', icon: images.sol },
    { name: 'HTML', bgColor: '#edf2f8', icon: images.html },
    { name: 'SASS', bgColor: '#edf2f8', icon: images.sass },
    { name: 'Git', bgColor: '#edf2f8', icon: images.git },
    { name: 'JS', bgColor: '#edf2f8', icon: images.javascript },
    { name: 'Node', bgColor: '#edf2f8', icon: images.node },
  ];

  const experiences = [
    { year: '2022', works: [{ name: 'Blockchain Developer', company: 'VORNA', des: 'I have worked as Blockchain Developer for one year.' }] },
    { year: '2023', works: [{ name: 'Frontend Developer', company: 'freelancer', des: 'I have been working as Frontend Developer as freelancer.' }] },
  ];

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skills.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt='skil' />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className='app__skills-exp'>
          {experiences.map((exp) => (
            <motion.div
              className='app__skills-exp-item'
              key={exp.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{exp.year}</p>
              </div>

              <motion.div className='app_skills-exp-works'>
                {exp.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.des}
                      data-tooltip-place="top"
              
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip className='skills-tooltip' id={work.name} />
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
  )