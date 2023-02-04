import React, { useState } from "react"
import axios from "axios"
export const useFetch = (url)=>{
      const [loading,setLoading] = useState(false)
      const [error,setError] = useState(false)
      const [data,setData] = useState([])


      const getData = ()=>{
           setLoading(true)
           axios.get(url).then((res)=>{
                setData(res.data)
                setLoading(false)
           }).catch((err)=>{
               setError(true)
               setLoading(false)
           })
      }
       return(
           {getData,loading,error,data}
       )
}