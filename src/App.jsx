import Navbar from "./Pages/navbar"
import Home from "./Pages/home"
import About from "./Pages/about"
import Experience from "./Pages/experience"
function App() {

  return (
    <>
    <div className="bg-gray-950">
    <Navbar />
    <Home />
    <About />    
    <Experience />
    </div>
    </>
  )
}

export default App
