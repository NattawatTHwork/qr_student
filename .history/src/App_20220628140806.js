import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Scan from "./components/Scan";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Reset from "./components/Reset";
import Setting from "./components/Setting";
import Updatepassword from "./components/Updatepassword";
import Deleteaccount from "./components/Deleteaccount";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <div style={{ position: "relative", zIndex: "100" }}>
        <Navbar />
        </div>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/seting" element={<Reset />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/scan" element={
            <ProtectedRoute>
              <Scan />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
