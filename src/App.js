import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { MyInternships } from "./pages/MyInternships";
import Company from "./pages/Company";
import ApplicantTracker from "./pages/ApplicantTracker";
import PostInternship from "./pages/PostInternship";
import CoRegister from "./pages/CoRegister";

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/coregister" element={<CoRegister />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myinternship" element={<MyInternships />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/applications/:id" element={<ApplicantTracker />}></Route>
        <Route path="/internship" element={<PostInternship />}></Route>
      </Routes>
    </div>
  );
}
export default App;
