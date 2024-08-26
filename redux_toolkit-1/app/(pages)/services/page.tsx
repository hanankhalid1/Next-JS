"use client"
import React from 'react'
import { useSelector } from 'react-redux'

function page() {
    const email = useSelector((store : any) =>{
    return store.counter.email
    })
  return (
    <div>
     <h6 className='text-black font-semibold'> My Service Email: <span className='font-light text-black'>{email}</span></h6>   
    </div>
  )
}

export default page
