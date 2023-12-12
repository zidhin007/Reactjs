import React, { useState } from 'react'

const Mapping = () => {
    var [names,setNames]=useState(["mithun","sidhin","aromal","santhosh"])
  return (
    <div>
        <ul>
            {names.map((value,index)=>{
                return(
                    <li>{value}</li>
                )
            })}
            
        </ul>

    </div>
  )
}

export default Mapping