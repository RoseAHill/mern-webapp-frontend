import { Routes, Route } from 'react-router-dom'

// services
import * as authService from './services/authService'

// pages

// components
import NavBar from './components/Nav/NavBar'

function App() {
  const [user, setUser] = useState(authService.getUser())

  return (
      <div className="app grid grid-cols-4 h-screen bg-slate-700 text-slate-50">
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/auth/login' element={<h1>Login</h1>} />
            <Route path='/auth/signup' element={<h1>Signup</h1>} />
          </Routes>
        </main>
      </div>
  )
}

export default App
