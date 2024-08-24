import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  let [name, Brillancon] = useState("");


  const getUsers = async () => {
    let res = await axios.get(import.meta.env.VITE_API_URL + "users");

    Brillancon(res.data);
  }

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL)
    console.log("ceci est un test")
    getUsers();
  }, [])

  return (
    <div>
      <span>{name}</span>
    </div>
  )
}

export default App
