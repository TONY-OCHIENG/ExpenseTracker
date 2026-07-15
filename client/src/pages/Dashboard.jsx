import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [auth,setAuth] = useState(false)
  const [details,setDetails] = useState([])
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:3000/auth/user')
    .then((response) => {
      if (response.data.status) {
        setDetails(response.data.details)
        setAuth(true)
      } else {
        navigate('/login')
        setAuth(false)
      }
    })
    .catch((error) => {console.log(error)})
  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard