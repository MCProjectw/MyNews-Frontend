import { useEffect } from "react";
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from '@loadable/component';

function App(){
  const getData = async () => {
    const users = await axios.get('http://localhost:5000/users')

    console.log(users.data);
  }
  useEffect(() => {
    getData()
  }, []);

  const Main = loadable(() => import("./pages/MainPage"));
  const Login = loadable(() => import("./pages/LoginPage"));
  const Regsiter = loadable(() => import("./pages/RegisterPage"));
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} loader={Main.load} />
        <Route path="/login" element={<Login />} loader={Login.load} />
        <Route path="/register" element={<Regsiter />}  loader={Regsiter.load} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;