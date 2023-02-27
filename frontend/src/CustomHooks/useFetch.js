import React, { useState } from "react"
import axios from "axios"
export const useFetch = ()=>{
      const [loading,setLoading] = useState(false)
      const [error,setError] = useState(false)
      const [data,setData] = useState([])


      const getData = (url)=>{
        setData([])
           setLoading(true)
           console.log(url,"from custom hook")
           axios.get(url).then((res)=>{
                setData(res.data)
                console.log(res.data)
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