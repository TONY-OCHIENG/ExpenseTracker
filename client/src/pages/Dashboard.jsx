import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { BanknoteArrowDown, LayoutDashboard, TrendingUp } from 'lucide-react'
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
    {name:"Income", link: "/income", icon: TrendingUp},
    {name:"Expense", link: "/expense", icon: BanknoteArrowDown}
  ]
  return (    
    <div>{
      auth ? <div className='w-full h-[100vh] flex bg-gray-100'>
       <div className={`fixed left-0 bottom-0 h-[100vh] md:w-[15%] w-[25%] border bg-white p-2`}>
        <div className='h-15 w-15 ml-5 md:ml-15 md:h-20 md:w-20 border mt-10 rounded-full bg-gradient-to-tl from-blue-900 via-blue-500 to-blue-200 flex items-center justify-center'>
         <h1 className='text-white font-extrabold text-4xl uppercase'> {details.firstName.charAt(0) + details.lastName.charAt(0)}</h1>
        </div>
         <p className='md:ml-15 mt-2 text-sm font-bold text-gray-600'> {details.firstName +" "+ details.lastName}</p>
           {
                      navLinks.map((link,index) => (
                          <NavLink key={index} to={link.link} end className={({isActive}) => `relative flex items-center
                              max-md:justify-center gap-2 w-full rounded-2 py-2.5 min-md:pl-10 first:mt-6
                              text-gray-900 ${isActive && 'bg-blue-600 text-white group mt-10 rounded-md'}`}>
                              {({isActive}) => (
                                  <>
                                    <link.icon className={`w-5 h-5 text-blue-600 ${isActive && 'text-white'}`}/>
                                    <p className='max-md:hidden'>{link.name}</p>
                                  </>
                              )}
                        </NavLink>
                      ))
            }
       </div>
       <div>
        <Outlet/>
       </div>
      </div> : <>Session expired <Link to={'/login'} className='font-extrabold'>Click to login</Link></>      
    }</div>
  )
}

export default Dashboard