import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { BanknoteArrowDown, LayoutDashboard, PowerCircle, PowerCircleIcon, TrendingUp, UserIcon } from 'lucide-react'
import { toast }from 'react-toastify'
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
  const navLinks = [
    {name:"Dashboard", link:"/dashboard",icon: LayoutDashboard},
    {name:"Income", link: "/dashboard/income", icon: TrendingUp},
    {name:"Expense", link: "/dashboard/expense", icon: BanknoteArrowDown}
  ]
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
    .then((response) => {
      if (response.data.status) {
        navigate('/login')
        toast.success(response.data.message)
      } else {
        toast.error("An error occured")
      }
    })
  }
  return (    
    <div className='w-full'>{
      auth && 
      <div className='w-full h-[100vh] flex bg-gray-100'>
       <div className={`relative h-[100vh] md:w-[15%] w-[25%] border-r bg-white p-2`}>
        <div className='h-15 w-15 ml-5 md:ml-15 md:h-20 md:w-20 border mt-10 rounded-full bg-gradient-to-tl from-blue-900 via-blue-500 to-blue-200 flex items-center justify-center'>
         <h1 className='text-white font-extrabold text-4xl uppercase'> {details.firstName.charAt(0) + details.lastName.charAt(0)}</h1>
        </div>
         <p className='md:ml-15 mt-2 text-sm font-bold text-gray-600 mb-10'> {details.firstName +" "+ details.lastName}</p>
           {
              navLinks.map((link,index) => (
                  <NavLink key={index} to={link.link} end className={({isActive}) => `relative flex items-center
                      max-md:justify-center gap-2 w-full rounded-2 py-2.5 min-md:pl-10 first:mt-6
                      text-gray-900 ${isActive && 'bg-blue-600 text-white group  rounded-md'}`}>
                      {({isActive}) => (
                          <>
                            <link.icon className={`w-5 h-5 text-blue-600 ${isActive && 'text-white'}`}/>
                            <p className='max-md:hidden'>{link.name}</p>
                          </>
                      )}
                </NavLink>
              ))
            }
             <div className='min-md:pl-10 pl-7 text-gray-900 mt-2.5'>
               <p className='flex gap-2 cursor-pointer' onClick={() => handleLogout()}><PowerCircle className='text-blue-600'/> <span className='max-md:hidden'>Logout</span></p>
              </div>
       </div>
      <div className='flex overflow-y-auto flex-col w-[85%]'>
        <div className=' border-b bg-white p-4 w-full shadow-md'>
          <h1 className='font-extrabold'>Expense Tracker</h1>
        </div>
        <Outlet/>
      </div>
      </div>    
    }</div>
  )
}

export default Dashboard