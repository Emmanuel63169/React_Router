import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Red from './components/red.jsx'
import Blue from './components/blue'
import Home from './components/home'

function App() {

  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <a href="/home">Home Link</a>
        <a href="/blue">Blue Link</a>
        <a href="/red">Red Link</a>
      </div>
      
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue/>}/>
          <Route path='/red' element={<Red/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
