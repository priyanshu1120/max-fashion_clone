import React,{useState} from 'react'

const Pagination = ({page,handleChange}) => {
   
    const handleClick =()=>{
         handleChange(page+1)
    }
    console.log(page)
     
  return (
    <button style={{color:"blue"}} onClick={handleClick}>
        Load More Product
    </button>
  )
}

export default Pagination