/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import RefrshHandler from "./RefrshHandler";

import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Profile } from "./pages/profile/profile";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // PrivateRoute component ensures authentication
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  return (
    <div className="App">
      {/* Handles token-based authentication on refresh */}
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile/>} />
        
        {/* Private Route for Dashboard */}
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        
        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
