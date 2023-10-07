import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// services
import * as authService from './services/authService'

// pages
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'

// components
import NavBar from './components/NavBar/NavBar'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvent = () => {
    setUser(authService.getUser())
  }

  return (
      <div className="app grid grid-cols-[1fr_4fr_1fr] grid-rows-[100px_1fr_80px] h-screen bg-slate-700 text-slate-50">
        <NavBar user={user} handleLogout={handleLogout} />
        <main className='col-start-2 col-span-1 mt-8 pt-4 flex place-content-center'>
          <Routes>
            <Route path='/' element={<Landing user={user}/>} />
            <Route path='/auth/login' element={<Login handleAuthEvent={handleAuthEvent} />} />
            <Route path='/auth/signup' element={<Signup handleAuthEvent={handleAuthEvent} />} />
          </Routes>
        </main>
      </div>
  )
}

export default App
