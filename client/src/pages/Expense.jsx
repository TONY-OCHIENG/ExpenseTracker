import axios from 'axios'
import { Download, Trash, XIcon } from 'lucide-react'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Chart as Chartjs} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useDownloadExcel } from 'react-export-table-to-excel'
import { dateFormat } from '../components/date'

function Expense() {
  const [open, setOpen] = useState(false)
  const [userID, setUserID] = useState(null)
  const [expense,setExpense] = useState([])
  const [details,setDetails] = useState({
      userId: '',
      expenseDetails:'',
      expensePrice:'',
      expenseDate:'',
    })
  const tableRef = useRef(null)
  const { onDownload } = useDownloadExcel({
      currentTableRef:tableRef.current,
      filename: "expense_Details",
      sheet:"expense_Details"
  })
  const navigate = useNavigate()
  useEffect(() => {
      axios.get('http://localhost:3000/auth/user')
      .then((response) => {
          if (response.data.status) {
            setDetails({userId:response.data.details.userID})
            setUserID(response.data.details.userID)
          } else {
            navigate('/login')
          }
      })
      .catch((error) => { console.log(error)})
  },[])
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleDetails = (event) => {
    const { name, value} = event.target
    setDetails((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/auth/expense',details)
    .then((response) => {
      if (response.data.status) {
        toast.success(response.data.message)
        setOpen(false)
        setDetails({
          expenseDetails:'',
          expensePrice:'',
          expenseDate:''
        })
      } else {
        toast.error("An error occurred")
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

   useEffect(() => {
      const fetchDetails = async () => {
          axios.get(`http://localhost:3000/auth/expenseDetails/${userID}`)
        .then((response) => {
          if (response.data.status) {
            setExpense(response.data.result)
          }
        })
        .catch((error) => { console.log(error) })
        }
      fetchDetails()
    },[userID])
   const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/auth/deleteExpense/${id}`)
        .then((response) => {
          if (response.data.status) {
            toast.success(response.data.message)
            setTimeout(() => {
              window.location.reload()
            },4000)
          } else {
            toast.error("An error occured")
          }
        })
        .catch((error) => {
          console.log(error)
        })
   }
  return (
    <div className={`relative w-full h-full ${open ? 'overflow-hidden' : ''}`}>
      <div className='max-w-7xl md:w-[90%] mx-auto px-2 w-full'>
        <div className='p-4 bg-white rounded-md mt-4 flex flex-col h-[400px] mb-2'>
          <div className='flex justify-between mb-2'>
            <div>
                <h1 className='text-md text-gray-800 font-extrabold'>Expense Overview</h1>
                <p className='text-xs text-gray-600'>Track your spendings over time and gain insights into where your money goes</p>
            </div>
            <button className='py-2 px-4 text-blue-600 font-extrabold cursor-pointer border rounded-md border-blue-600' onClick={() => handleOpen()}>+ Add Expense</button>
          </div>
            <div className='w-full h-[90%]'>
                <Line className='w-full'
                    data = {{
                      labels: expense.map((item) => (item.transactionDetail)),
                      datasets: [{
                        label: 'My Total Expenses',
                        data: expense.map((item) => (item.transactionPrice)),
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                      }]
                    }}                            
                />
            </div>
        </div>
           <div className='p-4 bg-white rounded-md mt-4 flex flex-col h-[400px] overflow-y-auto'>
          <div className='flex justify-between mb-2'>
            <div>
                <h1 className='text-md text-gray-800 font-extrabold'>Expenses </h1>
            </div>
            <button className='py-2 px-4 text-blue-600 font-extrabold cursor-pointer border rounded-md border-blue-600 flex items-center gap-2' onClick={ onDownload }><Download className='h-5 w-5'/> Download</button>
          </div>
            <div className='w-full h-[90%] mt-2 overflow-y-auto'>
            <table ref={tableRef} className='w-full h-full'>
              <thead className='text-gray-600 text-left' >
                <th>Item</th>
                <th>Date</th>
                <th>Price</th>
                <th>Action</th>
              </thead>
              <tbody className='p-2'>
                {
                  expense.map((item) => (
                    <tr className='text-gray-600 text-xs even:bg-gray-100 '>
                      <td>{item.transactionDetail}</td>
                      <td>{dateFormat(item.transactionDate)}</td>
                      <td>{item.transactionPrice}</td>
                      <td><Trash className='h-5 w-5 text-red-600 cursor-pointer' onClick={() => handleDelete(item.expense_id)}/></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
       <div className={`absolute bg-white z-50 w-[300px] md:w-[600px] flex flex-col rounded-md shadow-ms p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${open ? 'block' : 'hidden'}`}>
      <div className={`flex justify-between border-b`}>
       <h1 className='text-md text-gray-700 mb-4'>Add Expense</h1>
       <XIcon className='h-5 w-5' onClick={() => handleOpen()}/>
      </div>
      <form action="" className='mt-4' onSubmit={handleSubmit}>
        <label htmlFor="incomeexpense">Expense</label>
        <input type="text" value={details.expenseDetails} onChange={handleDetails} className='w-full p-2 border rounded-md mb-2' required id='incomeexpense' name='expenseDetails'/>
        <label htmlFor="expenseprice">Amount</label>
        <input type="number" value={details.expensePrice} onChange={handleDetails} className='w-full p-2 border rounded-md mb-2' required id='expenseprice' name='expensePrice'/>    
        <label htmlFor="expensedate">Date</label>
        <input type="date" value={details.expenseDate} onChange={handleDetails} className='w-full p-2 border rounded-md mb-2' required id='expensedate' name='expenseDate'/>    
        <button className='w-full py-2 bg-blue-600 text-white font-extrabold cursor-pointer rounded-md mt-4'>Add Expense</button>
      </form>
      </div>
      <div className={`absolute bg-black/40 backdrop-blur-sm z-40 w-full h-screen  shadow-ms p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${open ? 'block transition-all duration-300' : 'hidden'}`}></div>
    </div>
  )
}

export default Expense