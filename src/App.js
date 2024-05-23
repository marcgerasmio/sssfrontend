import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Dashboard from "./Dashboard.js";
import Login from "./Login.js";
import Register from "./Register.js";
import MemberInfo from "./MemberInfo.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/memberinfo" element={<MemberInfo />} />
      </Routes>
    </>
  );
}

export default App;
