import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Map from "./pages/Map";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects/Projects";
import AddProjects from "./pages/AddProject";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import Home from "./pages/Home";
import { AuthContext, AuthContextValue, initialContextValue } from "./utils/context/AuthContext";

const App: React.FC = () => {
  const [authContext, setAuthContext] = useState<AuthContextValue>(initialContextValue);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLogin = useCallback(async (): Promise<void> => {
    try {
      // const res = await Axios.get('/api/users')
      // if (res.status === 200) {
      //   setAuthContext({ ...res.data.data, isAuthenticated: true })
      // }
    } catch (err) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleLogin().then(() => setLoading(false));
    setLoading(false);
  }, [handleLogin]);

  if (loading) return <>loading...</>;

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      <div className="font-Noto-Sans">
        <BrowserRouter basename="/">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/map" element={<Map />} />
            <Route path="/add-projects" element={<AddProjects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
