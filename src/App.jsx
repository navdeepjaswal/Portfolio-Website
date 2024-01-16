import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      <Navbar/>     
      <Home/>
      
      <div id='about'>
        <About/>
      </div>
      
      <div  id='skills'>
        <Skills/>
      </div>
      
      <div id='experience'>
        <Experience/>
      </div>
     
      <div id='portfolio'>
        <Portfolio/>
      </div>
      
      <div id='contact'>
        <ContactUs/>
      </div>      
    </>
  )
}

export default App
