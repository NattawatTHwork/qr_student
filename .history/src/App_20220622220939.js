import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Navbar />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={
            <Protect
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
