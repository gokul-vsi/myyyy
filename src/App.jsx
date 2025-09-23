import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Table } from './components/Table'
import { Navbar } from './components/Navbar'
import { Form } from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/table' element={<Table/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
