import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setcount]= useState(0)

    const incbtn=()=>{
        setcount
    }
  return (
    <div>
        <Typography>count:0</Typography>
        <Button  variant='contained' color='success'>+</Button>&nbsp;&nbsp;
        <Button  variant='contained' color='error'>-</Button>
        
    </div>
  )
}

export default Counter