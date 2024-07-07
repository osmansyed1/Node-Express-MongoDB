import React, { useState } from 'react'
import st from "./home.module.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Createuser = () => {
    let nav=useNavigate()
    let [name,setName]=useState("");
    let[sal,setSal]=useState("");

    let nd=(e)=>{
        setName(e.target.value)
    }

    let sd=(e)=>{
        setSal(e.target.value)
    }

    let fh=(e)=>{
        e.preventDefault()
        let payload={
            name:name,
            salary:sal
        }

       axios.post("http://localhost:7000/user",payload)
       .then((e)=>{
        console.log("sent",e.data)
       })


       .catch(()=>{
        console.log("error")
       })
       nav("/user")


    }
  return (
    <div id={st.myform}>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nd}/> <br />
        <label htmlFor="">Salary</label>
        <input type="text" value={sal} onChange={sd}/> <br />
        <button onClick={fh}>Submit</button>
      </form>
    </div>
  )
}

export default Createuser
