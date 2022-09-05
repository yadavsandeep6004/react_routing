import "./style.css";
import Singnup from "../Singnup";
import LoginForm from "../LoginForm";
import Home from "../../components/Home";
import About from "../../components/About";
import OurWork from "../../components/OurWork";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import OurBlog from "../OurBlog";
import ProtectedRoute from "../ProtectedRoute";
import BlogDEtails from "../BlogDetails";
import User from '../User';
import  UserDetails from '../UserDetails'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="signup"
          element={
            <ProtectedRoute isPubicRoute={true}>
              <Singnup />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute isPubicRoute={true}>
              <LoginForm />
            </ProtectedRoute>
          }
        />

        {/* =================================================== */}

        <Route
          path="about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="ourwork"
          element={
            <ProtectedRoute>
              <OurWork />
            </ProtectedRoute>
          }
        />

        <Route
          path="ourblog"
          element={
            <ProtectedRoute>
              <OurBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="ourblog/:blogId"
          element={
            <ProtectedRoute>
              <BlogDEtails />
            </ProtectedRoute>
          }
        />
         <Route
          path="user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
         <Route
          path="user/:userId"
          element={
            <ProtectedRoute>
              < UserDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>This page not found 404</h1>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
