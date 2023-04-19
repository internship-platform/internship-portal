import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { MyInternships } from "./pages/MyInternships";
import Company from "./pages/Company";
function App() {
  return (
    <div className="bg-blue-100">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myinternship" element={<MyInternships />}></Route>
        <Route path="/company" element={<Company />}></Route>
      </Routes>
    </div>
  );
}

export default App;
