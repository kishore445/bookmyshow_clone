import "./App.css";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import { BrowserRouter, Routes, Route } from "react-router";
import "./Stylesheets/alignment.css";
import "./Stylesheets/custom.css";
import "./Stylesheets/form-elements.css";
import "./Stylesheets/sizes.css";
import "./Stylesheets/theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
       
      </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
