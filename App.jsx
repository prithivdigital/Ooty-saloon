import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SalonDetail from "./pages/SalonDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salon/:id" element={<SalonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
