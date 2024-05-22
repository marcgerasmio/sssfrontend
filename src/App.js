import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Dashboard from "./Dashboard.js";
import Login from "./Login.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
