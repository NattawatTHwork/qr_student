import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Scan from "./components/Scan";

function App() {
  // return (
  //   <div>
  //     <Navbar />
  //     <AuthContextProvider>
  //       <Routes>
  //         <Route path="/" element={
  //           <ProtectedRoute>
  //             <Home />
  //           </ProtectedRoute>
  //         } />
  //         <Route path="/scan" element={
  //           <ProtectedRoute>
  //             <Scan />
  //           </ProtectedRoute>
  //         } />
  //       </Routes>
  //     </AuthContextProvider>
  //   </div>
  // );

  return (
    <div>
      <Navbar />
      <Routes>
        <P>
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
      </Routes>
    </div>
  );
}

export default App;
