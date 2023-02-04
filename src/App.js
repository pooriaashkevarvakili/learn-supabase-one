
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Update from "./components/Update";
import supabase from "./config/supabaseClient"
function App() {
  console.log(supabase)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
