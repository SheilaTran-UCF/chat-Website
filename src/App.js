import SignUpPage from "./components/signUp_page";
import UserPage from "./components/user_";
import Register from "./feature/Register";
import Login from "./feature/login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user_" element={<UserPage />} />
        <Route path="signUp_page" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
