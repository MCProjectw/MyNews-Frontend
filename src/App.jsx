import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import IssuePage from "./pages/IssuePage";

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/issue" element={<IssuePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;