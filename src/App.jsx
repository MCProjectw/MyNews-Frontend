import { useEffect } from "react";
import axios from "axios"

function App(){
  const getData = async () => {
    const users = await axios.get('http://localhost:5000/users')

    console.log(users.data);
  }
  useEffect(() => {
    getData()
  }, []);
  return(
    <div className="App">

    </div>
  )
}

export default App;