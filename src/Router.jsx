// Router
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// Context
import { useAuthValue } from "./context/AuthContext";

// Pages
import { Home } from "./pages/Home/Home";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { NewCar } from "./pages/NewCar/NewCar";
import { About } from "./pages/About/About";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { NotFound } from "./pages/NotFound/NotFound";
import { PostDetail } from "./pages/PostDetail/PostDetail";
import { EditPost } from "./pages/EditPost/EditPost";


export const Router = () => {
  const { user } = useAuthValue();

  return (
    <Routes>
      <Route 
        path="/"
        element={user ? <Home /> : <Navigate to="/login" />}
      />
      <Route 
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      />
      <Route 
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route 
        path="/posts/create"
        element={user ? <NewCar /> : <Navigate to="/login" />}
      />
      <Route 
        path="/posts/edit/:id"
        element={user ? <EditPost /> : <Navigate to="/login" />}
      />
      <Route 
        path="/about"
        element={user ? <About /> : <Navigate to="/login" />}
      />
      <Route 
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route 
        path="/postdetail/:id"
        element={user ? <PostDetail /> : <Navigate to="/login" />}
      />
      <Route 
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
};