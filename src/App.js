import "./App.css";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
