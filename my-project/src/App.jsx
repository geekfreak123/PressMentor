import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import CourseDetails from './components/CourseDetails'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <CourseDetails/>
    </div>
  )
}

export default App