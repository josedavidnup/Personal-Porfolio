import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#0566FE]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='E-commerce'
            backgroundImg={'/assets/projects/default.png'}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Booking'
            backgroundImg={'/assets/projects/default.png'}
            projectUrl='/crypto'
            tech='React JS'
          />
          <ProjectItem
            title='Chat'
            backgroundImg={'/assets/projects/default.png'}
            projectUrl='/netflix'
            tech='React JS'
          />
          <ProjectItem
            title='ML App'
            backgroundImg={'/assets/projects/default.png'}
            projectUrl='/twitch'
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
