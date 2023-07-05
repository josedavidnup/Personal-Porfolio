import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#0566FE]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I'm a Python developer. I specialized in Machine Learning and I'm
            currently working with the following stack of technologies: Python,
            Numpy, Pandas, Scikit-learn, Keras, PyTorch, Tensorflow, Docker, and
            AWS. I have a background in Full Stack developement with JavaScript.
            I have spent +2 years of my career working for some Pyme
            corporations, in my last role at Full Stack. I consider myself a
            lifelong learner, with a growth mindset, interested in new
            technologies, and enjoy working in a team. I'm open to new
            challenges that allow me to grow in my career and improve skills in
            the field of Machine Learning / Data Science while supporting and
            contributing to the growth of the team and the company.
          </p>
          {/* <p className='py-2 text-gray-600'>
            I started web developement in 2017 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p> */}
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='Jose David Nuñez' />
        </div>
      </div>
    </div>
  );
};

export default About;
