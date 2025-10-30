import React from 'react'
import Mailer from '../sub/Mailer'
import GradientText from '../sub/GradientText'

export const Contact = () => {
  return (
    <div className="bg-black py-24 text-white w-full">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
    <div className="space-y-4">
        <h1 className="text-3xl pt-5 sm:text-4xl lg:text-5xl font-bold text-center lg:text-left col-span-1 lg:col-span-2">
      <GradientText>Let’s Get In Touch!</GradientText>
    </h1>
      <h3 className="text-xl font-semibold text-amber-300">Contact Info</h3>
      
      <p className="text-gray-300">
        📍 Madurai, Tamil Nadu, India<br />
        ✉️ saairam185@gmail.com<br />
        📞 +91 63854 55836
      </p>
      <div className="flex space-x-4 mt-4">
        {/* Replace these with your social links/icons */}
        <a href="https://linkedin.com/in/saairam-r-p-454a55353" className="text-gray-400 hover:text-white transition">
          <span className="sr-only">LinkedIn</span>
            <img src="assets\linkedin.png"  className="w-10 h-10" alt="" />
          
        </a>
        <a href="https://github.com/Saairam37" className="text-gray-400 hover:text-white transition">
          <span className="sr-only">GitHub</span>
          <img src="assets\githubb.png"  className="w-10 h-10" alt="" />
        </a>
      </div>
      <p className="text-gray-400">
        I’m currently open for new projects and collaborations. Feel free to drop a message—I'll get back to you as soon as possible.
      </p>
    </div>
    <div>
      {/* This is your Mailer component */}
      <Mailer />
    </div>
  </div>
</div>

  )
}
