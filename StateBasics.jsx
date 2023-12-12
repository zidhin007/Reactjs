import { Typography,Button, TextField ,} from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
   // var name ='mithun'
   var [fname,setname]= useState("Sidhin")
   var[val,setval]=useState()

   const changename=()=>{
    console.log("clicked")
    setname("sidhin")
    setname(val)
   }
   const inputhandler=(e)=>{
    console.log(e.target.value)
    setval(e.target.value)

   }
  return (
    <div>
        <Typography> My name is {fname}</Typography><br />
        <TextField variant="outlined" label="enter name" onChange={inputhandler}/><br /><br />
        <Button variant="contained" onClick={changename}>Change</Button>
    </div>
  )
}

export default StateBasics