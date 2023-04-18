import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-red-100">
      <Routes>
        <Route path="/" element={<Home />}>
          {/* add your route here. example below */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
