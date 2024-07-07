import React, { useEffect, useState } from 'react'
import axios from "axios"
import st from "./home.module.css"
import { Link,useNavigate } from 'react-router-dom'
const User = () => {
    let[con,setCon]=useState([])
    let nav=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:7000/user")
        .then((res)=>{
            console.log("got")
            console.log(res.data)
            setCon(res.data)
        })
        .catch(()=>{
            console.log("error")
        })

    },[])

    let del=(y)=>{
        axios.delete(`http://localhost:7000/user/${y}`)
        window.location.assign("/user")
    }
  return (
    <div id={st.userpage}>
      {
        con.map((x)=>{
         return(
            <div >
             <table key={x._id}>
                <tr colSpan="2" >
                    <th >Name </th>
                    <th >Salary </th>

                </tr>
                <tr>
                    <td>{x.name}</td>
                    <td>{x.salary}</td>
                </tr>
                <tr>
                    <td><Link to={`/edit/${x._id}`}><button>Edit</button></Link></td>
                    <td><Link ><button onClick={()=>{del(x._id)}}>Delete</button></Link></td>
                </tr>
             </table>
            </div>
         )
        })
      }
    </div>
  )
}

export default User
