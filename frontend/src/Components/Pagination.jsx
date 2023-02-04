import React,{useState} from 'react'

const Pagination = ({handleChange}) => {
   
    const handleClick =()=>{
         handleChange(10)
    }
     
  return (
    <button style={{color:"blue"}} onClick={handleClick}>
        Load More Product
    </button>
  )
}

export default Pagination