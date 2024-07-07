import React, { useEffect, useState } from 'react'
import  axios  from 'axios'
import st from "./home.module.css"
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"
const Edit = () => {
    let obj=useParams()
    let [name,setName]=useState("")
    let[sal,setSal]=useState("")
    let nav=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:7000/edit/${obj.id}`)
        .then((res)=>{
         console.log("got the data",res.data)
         setName(res.data.name)
         setSal(res.data.salary)
        })
        .catch(()=>{
            console.log("error")
        })
    
        

    },[])

    let nd=(e)=>{
        setName(e.target.value)
    }
    let sd=(e)=>{
        setSal(e.target.value)
    }

    let fh=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:7000/edit/${obj.id}`,{name,sal})
        .then(()=>{
            console.log("updated")
        })
        .catch(()=>{
            console.log("not update")
        })
        nav('/user')
    }

   
  return (
    <div id={st.myform}>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" value={name}  onChange={nd} /> <br />
        <label htmlFor="">Salary</label>
        <input type="text"  value={sal} onChange={sd}/> <br />
        <button  onClick={fh}>Submit</button>
      </form>
    </div>
  )
}

export default Edit
