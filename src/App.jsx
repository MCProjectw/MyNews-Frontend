import { useEffect } from "react";

function App(){
  useEffect(() => {
    fetch("/users").then(
      res => res.json()
    ).then(
      data => console.log(data)
    )
  }, []);
  return(
    <div className="App">

    </div>
  )
}

export default App;