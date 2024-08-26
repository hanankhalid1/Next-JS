"use client"
import { decrement, increment } from '@/store/slicecs/counterSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch()

  const onClickHandlerInc = () => {
    dispatch(increment())
  }
  const onClickHandlerDec = () => {
    dispatch(decrement())
  }
  return (
    <div>
     <button  onClick={onClickHandlerInc}>+</button>
     <hr />
     <button onClick={onClickHandlerDec}>-</button>
    </div>
  );
}

export default Counter;
