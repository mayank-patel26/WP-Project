import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductItem(props) {
  const {id}=useLocation().state;
  return (

    <div>{id} hi</div>
  )
}
