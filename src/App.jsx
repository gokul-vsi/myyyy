import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Table } from "./components/Table";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";

function AppRoutes() {
// This is seperate route components

const location = useLocation();
const [showNavbar, setShowNavbar] = useState(true);


 useEffect(() => {
    // Hide navbar on login page
    if (location.pathname === '/') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);



  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
