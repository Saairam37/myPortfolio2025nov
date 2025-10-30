import React from 'react';
import GradientText from '../sub/GradientText.jsx';
import StarBtn from '../sub/StarBtn.jsx';

const About = () => {
  return (
    <article className="w-full flex flex-col items-center gap-10 p-10 pt-[130px]">
      <div className='image-wrapper'><img src="assets\IMG_2025.webp" alt="" /></div>
      <div className="w-full max-w-[800px] text-center">
        <h1 className="text-4xl font-bold">
          <GradientText>Hello👋</GradientText>
        </h1>
        <p className="text-lg font-semibold mt-4">
          I'm a <span className='font-extrabold'>Full Stack Developer</span> from Madurai, Tamil Nadu, India 🇮🇳. I specialize in building dynamic web applications using <span className='font-extrabold'>MongoDB, Express.js, React.js, and Node.js</span>. Having completed the <span className='font-extrabold'>MERN Stack program at Guvi Geeks, IIT Madras</span>, I am eager to apply my skills in real-world projects. <span className='font-extrabold'>Let's connect and collaborate!⤵️</span>
        </p>
      </div>
      <div className="w-full max-w-[800px] flex justify-center">
        <a href="#contact"><StarBtn title="Contact" /></a>
      </div>
    </article>
  );
};

export default About;
