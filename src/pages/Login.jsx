import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import * as authService from '../services/authService'

const Login = ({ handleAuthEvent }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACKEND_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvent()
      navigate('/')
    } catch (err) {
      console.error(err)
      setMessage(err.message)
    }
  }
  
  const { email, password } = formData

  const isFormInvalid = ()  => {
    return !(email && password)
  }

  return (
    <div className='flex items-center flex-col'>
      <h1 className='pb-6'>Login</h1>
      <p className="errorMessage text-red-400">{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className='flex flex-col items-center'>
        <label className="w-full flex justify-end items-center">
          Email
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label className="w-full flex justify-end items-center mb-4">
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <div className='flex w-full justify-around'>
          <Link to="/">Cancel</Link>
          <button disabled={isFormInvalid()}>
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login