import React from 'react'
import ProjectCard from './ProjectCard'
import projectList from '../json/project.json'
// import useScrollAnimation from '../hooks/useScrollAnimation';
// import ScrollAni from '../ScrollAni';
import tw from 'tailwind-styled-components';

export const ProjectComponent = tw.section`
  grid
  grid-cols-4
  grid-row-3
  gap-4
  pt-[3rem]
  h-auto

  max-md:pt-[3rem]
  max-lg:grid-cols-1
  max-xl:grid-cols-2  
  max-2xl:grid-cols-3
`;

export const Container = tw.article`
  pt-20
`;

const Project = ({ id, navTabs }) => {
//   const { scrollRef, scrollEl } = useScrollAnimation();
  let project = projectList.projectList.map(item => <ProjectCard key={item.title} data={item} id={item.Mtitle}></ProjectCard>)

  return (
      <Container id={id} ref={navTabs[1].targetRef}>
        <div className='project-container'>
          <section className='project-section'>
            <h1>Project</h1>
            <div className='card-container'>
              {project}
            </div>
          </section>
        </div>
      </Container>
  )
}

export default Project
