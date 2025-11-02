import './App.css'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  }
  return (
    <>
      <h1>Hola de nuevo, {user}</h1>
      <button>logout</button>
      <Register/>
      <Login handleLogin={handleLogin} />
    </>
  )
}

export default App
