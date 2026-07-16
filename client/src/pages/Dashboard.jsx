import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Dashboard() {
  const [auth,setAuth] = useState(false)
  const [details,setDetails] = useState([])
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
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
    <div>{
      auth ? <div className='w-full h-[100vh] flex bg-gray-100'>
       <div className={`fixed left-0 bottom-0 h-[100vh] md:w-[15%] w-[25%] border bg-white`}>
        <h1 className='mt-10 font-bold text-center md:text-xl md:block hidden'>EXPENSE<span className='text-blue-600'>TRACKER</span></h1>
        <div className='h-15 w-15 ml-5 md:ml-15 md:h-20 md:w-20 border mt-10 rounded-full bg-gradient-to-tl from-blue-900 via-blue-500 to-blue-200 flex items-center justify-center'>
         <h1 className='text-white font-extrabold text-4xl uppercase'> {details.firstName.charAt(0) + details.lastName.charAt(0)}</h1>
        </div>
         <p className='md:ml-15 mt-2 text-sm font-bold text-gray-600'> {details.firstName +" "+ details.lastName}</p>
       </div>
       <div></div>
      </div> : <>Session expired <Link to={'/login'} className='font-extrabold'>Click to login</Link></>      
    }</div>
  )
}

export default Dashboard