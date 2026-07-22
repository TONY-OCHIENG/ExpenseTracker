import axios from 'axios'
import { ArrowBigRight, ArrowRight, BanknoteArrowDown, Coins, DollarSign, Wallet } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Chart as Chartjs} from 'chart.js/auto'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
import { dateFormat } from '../components/date'

function Home() {
  const [income,setIncome] = useState(null)
  const [expense, setExpense] = useState(null)
  const [userId, setUserID] = useState(null)
  const [balance, setBalance] = useState(null)
  const [transactions,setTransactions] = useState([])
  const [expensetransaction, setExpensetransaction] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3000/auth/user')
    .then((response) => {
      if (response.data.status) {
        setUserID(response.data.details.userID)
      } else {
        navigate('/login')
      }
    })
    .catch((error) => { console.log(error)})
  },[])

  useEffect(() => {
    const fetchIncome = async () => {
    axios.get(`http://localhost:3000/auth/totalIncome/${userId}`)
    .then((response) => {
      if (response.data.status) {
        setIncome(response.data.result)
      }
    })
    .catch((error) => { console.log(error)})
    }
    
    fetchIncome()
  },[userId])
  useEffect(() => {
    const fetchExpense = async () => {
    axios.get(`http://localhost:3000/auth/totalExpense/${userId}`)
    .then((response) => {
      if (response.data.status) {
        setExpense(response.data.result)
      }
    })
    .catch((error) => { console.log(error)})
    }
    
    fetchExpense()
  },[userId])
  const formatter = new Intl.NumberFormat('en-US')
 

  useEffect(() => {
    const calculateBalance = (income, expense) => {
        return formatter.format(income - expense)
    }
    const balaNCE = calculateBalance(income,expense)
    setBalance(balaNCE)
  })
  
  const fetchTransaction = async () => {
    axios.get(`http://localhost:3000/auth/incomeTransaction/${userId}`)
    .then((response) => {
      if (response.data.status) {
        setTransactions(response.data.result.income)
        setExpensetransaction(response.data.result.expense)
      }
    })
    .catch((error) => console.log(error))
   }

   useEffect(() => {
    fetchTransaction()
   },[userId])
   
   const transactionDetails = transactions.concat(expensetransaction)
  return (
    <div className='w-full h-[100vh]'>
      <div className='max-w-7xl mx-auto md:w-[90%] w-full px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-4 mb-2 gap-2'>
          <div className='bg-white p-4 rounded-md shadow-md flex  gap-2'>
            <div className='h-15 w-15 text-white ml-5 flex justify-center items-center  rounded-full bg-purple-900'>
              <Coins/>             
            </div>
             <div className='flex flex-col ml-5'>
                <h1 className='text-gray-700'>Total Balance</h1>
                <h1 className='font-extrabold text-xl'>KSH {balance}</h1>
             </div>
          </div>
          <div className='bg-white p-4 rounded-md shadow-md flex  gap-2'>
            <div className='h-15 w-15 text-white ml-5 flex justify-center items-center  rounded-full bg-blue-600'>
              <Wallet/>             
            </div>
             <div className='flex flex-col ml-5'>
                <h1 className='text-gray-700'>Total Income</h1>
                <h1 className='font-extrabold text-xl'>KSH {formatter.format(income > 0 ? income : 0)}</h1>
             </div>
          </div>
          <div className='bg-white p-4 rounded-md shadow-md flex  gap-2'>
            <div className='h-15 w-15 text-white ml-5 flex justify-center items-center  rounded-full bg-red-600'>
              <BanknoteArrowDown/>             
            </div>
             <div className='flex flex-col ml-5'>
                <h1 className='text-gray-700'>Total Expense</h1>
                <h1 className='font-extrabold text-xl'>KSH  {formatter.format(expense > 0 ? expense : 0)}</h1>
             </div>
          </div>         
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='p-4 rounded-md bg-white shadow-md h-[500px]'>
            <div className='flex justify-between items-center'>
              <p className='text-sm text-gray-600'>Recent Transactions</p>
              <Link to={'/dashboard/expense'} className='flex text-xs px-4 py-2 items-center gap-2 bg-gray-200 rounded-md text-gray-600'>See All <ArrowRight className='w-4 h-4 text-blue-600'/></Link>
            
            </div>
             <div className='h-[85%] mt-10 w-full overflow-y-auto'>
              <table className='w-full'>
                <thead className='text-gray-600 text-left'>
                  <th>Items</th>
                  <th>date</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  {
                    transactionDetails.map((item) => (
                      <tr className='even:bg-blue-100 text-xs text-gray-600'>
                        <td className='p-2'>{item.transactionDetail}</td>
                        <td>{dateFormat(item.transactionDate)}</td>
                        <td>{item.transactionPrice}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
             </div>
          </div>
          <div className='p-4 rounded-md bg-white shadow-md h-[500px]'>
              <div className='flex justify-between items-center'>
              <p className='text-sm text-gray-600 mt-2'>Financial Overview</p>         
            </div>
            <div className='h-[80%] mt-10 flex justify-center items-center'>
                <Pie className='w-full'
                data = {{
                    datasets: [{
                        data: [income,expense],
                        backgroundColor: ["blue","red"]
                    }],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Income',
                        'Expense'
                    ]
                }}
              />
            </div>
          </div>
        </div>        
      </div>     
    </div>
  )
}

export default Home