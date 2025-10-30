import { Toaster } from 'react-hot-toast'
import './App.css'
import About from './components/main/About'
import { Contact } from './components/main/Contact'
import NavBar from './components/main/NavBar'
import Portfolio from './components/main/Portfolio'
import Skills from './components/main/Skills'

function App() {

  return (
    <div className='w-[100%] flex flex-col items-center bg-blue-50'>
      <NavBar/>
      <hr id='about' className="w-[70%] border-t border-gray-500" />
      <About/>
      <hr id='skill' className="mt-10 mb-10 w-[70%] border-t border-gray-500" />
      <Skills/>
      <hr id='port' className="mt-10 w-[70%] mb-10 border-t border-gray-500" />
      <Portfolio/>
      <hr id='contact' className="mt-10 w-[70%] mb-10 border-t border-gray-500" />
      <Contact/>
      <Toaster position="top-center" />
    </div>
  )
}

export default App
