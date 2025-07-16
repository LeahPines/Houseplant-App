import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlantsTable from "./pages/PlantsTable";
import PlantDetails from './pages/PlantDetailes';
import Home from './pages/Home';

function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantsTable />} />
        <Route path="/plants/:plantId" element={<PlantDetails />} />
      </Routes>
    </Router>  
    </>
  )
}

export default App
