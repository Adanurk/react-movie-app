import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import {AuthContext} from "../context/AuthContext";
import { useContext } from "react";

const AppRouter = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/details/:id" element={currentUser ? <MovieDetail /> : <Navigate to="/login"/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter