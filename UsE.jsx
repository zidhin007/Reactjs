import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UsE = () => {
    var[name, setname]= useState()

    const changeHnmae=()=>{
        setname("Home")
    }
    const changeCnmae=()=>{
        setname("contact")
    }
    const changeGnmae=()=>{
        setname("gallery")
    }

    useEffect(()=>{
        changeHnmae()
    },[])

  return (
    <div>
        <Typography>Welcome to</Typography>
        <Button variant='contained' onClick={changeHnmae}>Home</Button>
        <Button variant='contained'onClick={changeCnmae}>Contact</Button>
        <Button variant='contained'onClick={changeGnmae}>Gallery</Button>
    </div>
  )
}

export default UsE