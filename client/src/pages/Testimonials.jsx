import { Star } from 'lucide-react'
import React from 'react'

function Testimonials() {
    const testimonials = [
        {
            name: "Priya M., Freelance Designer",
            testimonial:"I used to dread month-end because I never knew where my money actually went. This app changed that completely — I can see my spending categorized in real time, and I finally caught a subscription I'd forgotten to cancel. It paid for itself in the first week.",
        },{
            name:"James T.",
            testimonial:"With three kids and a million little expenses, our finances used to feel chaotic. Now my husband and I both add purchases on the go, and we get a clear picture of our monthly budget without any spreadsheets. It's honestly brought less stress into our household."
        },{
            name:"Amara K.",
            testimonial:"As a college student on a tight budget, this app has been a lifesaver. I set weekly spending limits and get alerts before I overspend on food delivery (guilty). Simple, fast, and it actually keeps me accountable."
        }        
    ]
  return (
    <div id='testimonials' className='py-16 h-[100vh] w-full bg-white'>
        <div className='max-w-7xl md:w-[80%] mx-auto w-full px-4'>
            <h1 className='md:text-5xl text-3xl text-gray-800 font-extrabold text-center'>Testimonials</h1>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 md:mt-28'>
                {
                    testimonials.map((item) => (
                        <div className='p-4 rounded-md shadow-lg bg-white'>
                            <h1 className='text-center font-bold m-4 text-xl text-gray-800'>{item.name}</h1>
                            <p className='text-gray-600 text-md'>{item.testimonial}</p>
                            <p className='flex gap-1 mt-5 text-sm'><Star className='fill-amber-400 text-amber-400'/>
                               <Star className='fill-amber-400 text-amber-400'/>
                               <Star className='fill-amber-400 text-amber-400'/>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Testimonials