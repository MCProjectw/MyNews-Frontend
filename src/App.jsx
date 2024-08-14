import { useEffect } from "react";
import axios from "axios"
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from './pages/MainPage'

function App(){
  const getData = async () => {
    const users = await axios.get('http://localhost:5000/users')

    console.log(users.data);
  }
  useEffect(() => {
    getData()
  }, []);
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;