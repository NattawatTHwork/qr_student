import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Scan from "./components/Scan";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar style={{ position: 'absolute', zIndex: '2' }} />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/scan" element={
            <ProtectedRoute>
              <Scan style={{ position: 'absolute', zIndex: '2' }} />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );

  // return (
  //   <div>
  //     <Navbar />
  //     <Routes>
  //       <AuthContextProvider>
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
  //       </AuthContextProvider>
  //     </Routes>
  //   </div>
  // );
}

export default App;