
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Analysis from "./Pages/Analysis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analysis" element={<Analysis />} />
    </Routes>
  );
}

export default App;
