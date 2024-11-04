import { Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/homepage'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <NavBar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;
