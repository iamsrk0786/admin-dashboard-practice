import React, { useState } from 'react'
import axios from "axios"

export const register = () => {
    const [data,setdata]= useState([])
const [loading, setloading] = useState(false)
const [error, seterror] = useState(null)
useEffect(()=>{
    setloading(true)
    fetchdata()
},[])
const fetchdata = async()=>{
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setdata(response.data)
    setloading(false)
    }catch(error){
        seterror(error.message)
        setloading(false)
    
        }

}
  return (
    <div>
        {loading && <p>loading....</p>}
      {error && <p>Error: {error}</p>}
      {data.length>0 && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
