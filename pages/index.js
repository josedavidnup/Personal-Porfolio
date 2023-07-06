import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Jose David | Full Stack Developer | Machine Learning Developer
        </title>
        <meta
          name='description'
          content='Empowering digital innovation through a fusion of Full Stack and Machine Learning expertise. Elevate your projects with seamless web development and cutting-edge machine learning solutions. Unleash the potential of technology with our versatile development skills.'
        />
        <link rel='icon' href='/jd_logo.png' />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
