import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/Signup";
import ForgetPassword from "./screens/ResetPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/reset-password" Component={ForgetPassword} />
      </Routes>
    </Router>
  );
}

export default App;
