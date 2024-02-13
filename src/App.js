import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/Signup";
import ForgetPassword from "./screens/ResetPassword";
import ViewTasks from "./screens/ViewTasks";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/reset-password" Component={ForgetPassword} />
        <Route path="/view-tasks" Component={ViewTasks} />
      </Routes>
    </Router>
  );
}

export default App;
