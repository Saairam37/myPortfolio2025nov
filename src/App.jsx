import './App.css'
import About from './components/main/About'
import NavBar from './components/main/NavBar'
import Portfolio from './components/main/Portfolio'
import Skills from './components/main/Skills'

function App() {

  return (
    <div className='w-[100%] flex flex-col items-center bg-blue-50'>
      <NavBar/>
      <About/>
      <hr className="my-4 w-[70%] border-t border-gray-500" />
      <Skills/>
      <hr className="my-4 border-t border-gray-500" />
      <Portfolio/>
    </div>
  )
}

export default App
