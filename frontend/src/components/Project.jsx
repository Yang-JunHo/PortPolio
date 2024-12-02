import '../App.css';
import React from 'react'
import ProjectCard from './ProjectCard'
import projectList from '../json/project.json'
import { motion } from 'framer-motion'
// import useScrollAnimation from '../hooks/useScrollAnimation';
// import ScrollAni from '../ScrollAni';
// import tw from 'tailwind-styled-components';



const Project = () => {
  //   const { scrollRef, scrollEl } = useScrollAnimation();
  let project = projectList.projectList.map(item => <ProjectCard key={item.title} data={item} id={item.Mtitle}></ProjectCard>)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      <div className='project-container'>
        <section className='project-section'>
          <h1>Project</h1>
          <div className='card-container'>
            {project}
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Project
