import React, { useRef } from 'react'
import StarBtn from './StarBtn'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Mailer = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_n6bs87h', 'template_sc6eaug', form.current, 'nNBJfCIMPwH-8tjh_')
      .then(() => {
          toast.success('Message sent successfully!');
          form.current.reset();
      }).catch(() => {
          toast.error('Failed to send the message. Please try again later.');
      });
      }

  return (
    <div className="h-auto bg-black flex items-center justify-center p-0">
  <form ref={form} onSubmit={sendEmail} action="" className="w-full max-w-md bg-gray-900 rounded-lg p-8 shadow-xl flex flex-col gap-6">
    <input
      type="text"
      name="name"
      id="name"
      required
      className="bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 rounded p-3 focus:outline-none focus:border-indigo-500"
      placeholder="Your name..."
    />

    <input
      type="email"
      name="email"
      id="email"
      required
      className="bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 rounded p-3 focus:outline-none focus:border-indigo-500"
      placeholder="Your email..."
    />

    <input
      type="subject"
      name="subject"
      id="subject"
      required
      className="bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 rounded p-3 focus:outline-none focus:border-indigo-500"
      placeholder="Your subject..."
    />

    <textarea
      name="message"
      id="message"
      cols="30"
      rows="6"
      required
      className="bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 rounded p-3 focus:outline-none focus:border-indigo-500"
      placeholder="Your message..."
    ></textarea>

    <button
      type="submit"
    >
      <StarBtn title="Send Message" />
    </button>
  </form>
</div>

  )
}

export default Mailer