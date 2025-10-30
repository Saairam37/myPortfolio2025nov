import React from 'react'

const Mailer = () => {
  return (
    <div className="h-auto bg-black flex items-center justify-center p-0">
  <form action="" className="w-full max-w-md bg-gray-900 rounded-lg p-8 shadow-xl flex flex-col gap-6">
    <input
      type="text"
      name="name"
      id="name"
      className="bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 rounded p-3 focus:outline-none focus:border-indigo-500"
      placeholder="Your name"
    />

    <input
      type="email"
      name="email"
      id="email"
      className="bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 rounded p-3 focus:outline-none focus:border-indigo-500"
      placeholder="you@example.com"
    />

    <textarea
      name="message"
      id="message"
      cols="30"
      rows="6"
      className="bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 rounded p-3 focus:outline-none focus:border-indigo-500"
      placeholder="Your message"
    ></textarea>

    <button
      type="submit"
      className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md py-3 transition-all duration-200"
    >
      Send
    </button>
  </form>
</div>

  )
}

export default Mailer