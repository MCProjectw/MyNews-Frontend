import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from '@loadable/component';
import LoginPage from "./pages/LoginPage";

function App(){

  const Main = loadable(() => import("./pages/MainPage"));
  // const Login = loadable(() => import("./pages/LoginPage"));
  const Regsiter = loadable(() => import("./pages/RegisterPage"));
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/MainPage" element={<Main />} loader={Main.load} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Regsiter />}  loader={Regsiter.load} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;