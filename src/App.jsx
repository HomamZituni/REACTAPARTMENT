import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Amenities from './pages/Amenities'
import Nearby from './pages/Nearby'
import FloorPlans from './pages/FloorPlans'


function App() {
  return (
 <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/nearby" element={<Nearby />} />
          <Route path="/floor-plans" element={<FloorPlans />} />
        </Routes>
      </div>
    </Router>
  )
}
 export default App 