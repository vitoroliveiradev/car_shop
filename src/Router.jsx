import { Home } from "./pages/Home/Home";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { NewCar } from "./pages/NewCar/NewCar";
import { About } from "./pages/About/About";

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"


export const Router = () => {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Home />}
      />
      <Route 
        path="/login"
        element={<Login />}
      />
      <Route 
        path="/register"
        element={<Register />}
      />
      <Route 
        path="/posts/create"
        element={<NewCar />}
      />
      <Route 
        path="/about"
        element={<About />}
      />
    </Routes>
  )
};