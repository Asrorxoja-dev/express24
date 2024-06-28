import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Restoran from "./components/Restoran"


function App() {
  return (
    <div>
      <Navbar/>
      <div className="align-content">
      <Hero/>
      <Restoran/>
      </div>
      <Footer/>
    </div>
  )
}

export default App