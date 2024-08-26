"use client"
import Counter from '@/components/Counter'
import { store } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'

export default function page() {
   const count =  useSelector((store : any) =>{
    return store.counter.count
   })
  return (
    <div>
      count - {count}
      <Counter/>
    </div>
  )
}
