import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Income from './pages/Income'
import Expense from './pages/Expense'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/dashboard/income' element={<Income/>}/>
        <Route path='/dashboard/expense' element={<Expense/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App