


import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Card from './pages/card'
import Header from './components/header/header'

function App() {

  return (
    <>
<<<<<<< HEAD
    <div>
     <Header/>
=======
   
    <div>
    <Header className= 'fixed-header'/>
>>>>>>> daca255 (Describe your changes here)
    <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route exact path='/card' element={<Card/>}/>

    </Routes>
    </div>


    </>
  )
}

export default App
