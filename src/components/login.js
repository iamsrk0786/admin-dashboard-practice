import React, { useState } from 'react'
import axios from "axios"
const login = () => {
    const[name,setname]= useState("")
    const[email,setemail]= useState("")
    const[password,setpassword]= useState("")
    // const[formdata,setformdata] = useState({ // formdata
    //     name: "",
    //     email: "",
    //     password: "",
    // })
    // const handleSubmit=(e)=>{
    //     e.preventDefault()        // using .then and .catch
    //     axios.post('http://localhost:5000/api/auth/register', {name, email, password})
    //    .then(res=>console.log(res.data))
    //    .catch(err=>console.log(err.response.data))
    //     setname("")
    //     setemail("")
    //     setpassword("")
    //     }
    // const handlechange=(e)=>{
    //     const{name,value}= e.target                  // using formdata method
    //     // setformdata((prev)=> ({...prev,[name]:value}))
    //     setformdata({...formdata,[name]:value})
    //     console.log(formdata)
    // }
    // const handleCreate = async () => {
    //     try {
    //       const response = await axios.post("https://api.example.com/users", formdata);

    //       console.log("User created:", response.data);
    //     } catch (error) {
    //       console.error("Error creating user:", error);
    //     }
    //   };
    const handleSubmit =async()=>{
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {name
                , email, password})
                console.log(response.data)
                setname("")
                setemail("")
                setpassword("")
                } catch (error) {
                    console.error(error)
                    }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>name:</label>
            {/* <input
        type="text"
        name="name" // Field name must match the state property for formdata method
        placeholder="Name"
        value={formData.name}
        onChange={handleChange} */}
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
            <br/>
            <label>email:</label>
            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            <br/>
            <label>password:</label>
            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <br/>
            <button type="submit">submit</button>
            
        </form>
    </div>
  )
}

export default login


