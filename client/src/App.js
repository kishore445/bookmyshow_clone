import "./App.css";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Admin from "./pages/Admin/Admin.js";
import Profile from "./pages/Profile/Profile.js";
import TheatreForMovie from "./pages/TheatreForMovie/TheaterForMovie.js";
import { BrowserRouter, Routes, Route } from "react-router";
import "./Stylesheets/alignment.css";
import "./Stylesheets/custom.css";
import "./Stylesheets/form-elements.css";
import "./Stylesheets/sizes.css";
import "./Stylesheets/theme.css";
import ProtectedRoute from "./Componenets/ProtectedRoute.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={ <ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> 
          <Route path="/movie/:id" element={ <ProtectedRoute>  <TheatreForMovie /></ProtectedRoute> }/>
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
