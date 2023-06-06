"use client"
import React, { useState } from 'react'

const ProductPage = () => {
    const [name, setName] = useState("")
    console.log('rendered on client')
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage