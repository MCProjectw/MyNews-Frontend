import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from '@loadable/component';

function App(){

  const Main = loadable(() => import("./pages/MainPage"));
  const Login = loadable(() => import("./pages/LoginPage"));
  const Regsiter = loadable(() => import("./pages/RegisterPage"));
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/MainPage" element={<Main />} loader={Main.load} />
        <Route path="/login" element={<Login />} loader={Login.load} />
        <Route path="/register" element={<Regsiter />}  loader={Regsiter.load} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;