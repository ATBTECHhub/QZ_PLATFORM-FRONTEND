
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TakerSignup from "./pages/TakerSignup.jsx";
import CreatorSignup from "./pages/CreatorSignup.jsx"


function App() {
 return (
   <div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<TakerSignup />} />
       <Route path="signup" element={<CreatorSignup/>} />
     </Routes>
   </div>
 );
}

export default App;
 