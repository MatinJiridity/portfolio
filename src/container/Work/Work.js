import React, { useState, useEffect } from 'react';
import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import images from '../../constants/images';


const Work = () => {
  const works = [
    { title: 'UI/UX Development', describtion: 'Responsive Restaurant Website with Modern UI and UX in ReactJS', url: images.restruant, projectUrl: 'https://modern-ui-ux-project2.onrender.com/', codeUrl: 'https://github.com/MatinJiridity/Modern-UI-UX', tag: 'UI/UX', },
    { title: 'BlockChain Development', describtion: 'Decentralized Online Voting System using Blockchain', url: images.devoting, projectUrl: 'https://devoting-budget-v1.onrender.com ', codeUrl: 'https://github.com/MatinJiridity/devoting.budget-v1', tag: 'BlockChain', },
    { title: 'UI/UX Development', describtion: 'Responsive Modern UI/UX Website in React JS', url: images.gpt3, projectUrl: 'https://modern-ui-ux-project.onrender.com/ ', codeUrl: 'https://github.com/MatinJiridity/Modern-UI-UX-Website-in-React-JS', tag: 'UI/UX', },
    { title: 'Frontend Development', describtion: 'A React and Redux Toolkit.', url: images.cryptoverse, projectUrl:  'https://cryptoverse-azx9.onrender.com/', codeUrl: 'https://github.com/MatinJiridity/cryptoverse', tag: 'React js', },
    { title: 'Frontend Development', describtion: 'My Portfolio.', url: images.portfolio, projectUrl: 'https://matinjiri.onrender.com/', codeUrl: 'https://github.com/MatinJiridity/portfolio', tag: 'Frontend', },
  ]
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWorks, setFilterWorks] = useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 })

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })

      if (item === 'All') {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tag === item));
      }

    }, 500);
  }

  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio</span> Section</h2>

      <div className='app__work-filter'>
        {['BlockChain', 'Frontend', 'UI/UX', 'React js', 'All'].map((item, index) => (
          <div key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWorks.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app_flex'>
              <img src={work.url} alt='work img' />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectUrl} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.projectUrl} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app_flex' >
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.describtion}</p>
              <div className='app__work-tag ' >
                <p className='p-text'>{work.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'work',
  'app__primarybg'
  )