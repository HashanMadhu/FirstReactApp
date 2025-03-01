import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <main className="content">
        <h2>Welcome to My React App</h2>
        <p>This is a simple header with navigation.</p>
      </main>
    </div>
  )
}

export default App
