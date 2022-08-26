import React,{useState} from 'react'

const Pagination = ({pages,handleChange}) => {
   
    const handleClick =()=>{
         handleChange(1)
    }
    console.log(pages)
     
  return (
    <button style={{color:"blue"}} onClick={handleClick}>
        Load More Product
    </button>
  )
}

export default Pagination