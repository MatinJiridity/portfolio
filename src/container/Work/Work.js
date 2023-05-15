import React, { useState, useEffect } from 'react';
import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import images from '../../constants/images';


const Work = () => {
  const works = [
    { title: 'BlockChain Development', describtion: 'A Blockchain Platfoem', url: images.eth, projectUrl: '', codeUrl: '', tag: 'BlockChain', },
    { title: 'Frontend Development', describtion: 'A Modern UI/UX Web.', url: images.about01, projectUrl: '', codeUrl: '', tag: 'React js', },
    { title: 'UI/UX Development', describtion: 'A Modern UI/UX Web.', url: images.about02, projectUrl: '', codeUrl: '', tag: 'UI/UX', },
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