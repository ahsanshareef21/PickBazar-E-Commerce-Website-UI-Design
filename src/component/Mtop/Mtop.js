import React from 'react'

export default function Mtop() {
  return (
    <div >
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"80vh"}}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h3>Groceries Delivered in 90 Minute</h3>
            <p>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
          </div>

          <div style={{display:"flex"}}>
            <input type="text" name="" id="" placeholder='Search Your Product from here' style={{padding:"10px",width:"60vw",border:"2px solid black"}}/>
            <button style={{padding:"10px",backgroundColor:"green",color:"white"}}>Search</button>
          </div>
      </div>
    </div>
  )
}
