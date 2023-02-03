import {Box,Heading,Stack,Flex, SimpleGrid, Img,Text,Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa"
import { MdFavoriteBorder } from "react-icons/md"
import { BsHandbag } from "react-icons/bs"
import {Link} from "react-router-dom"
import "./Navbar.css"
import { ModalNavbar } from "./ModalNavbar"
import {useState,useEffect} from "react"
import { getSearch } from "../Api/Api"


const Navbar = () => {
const [text,setText]=useState("");
const [SearchData,setSearchData] = useState([])
const [pages,setPages] = useState(1)

useEffect(()=>{
  getData({pages,text})
},[pages,text])

const getData=({pages,text})=>{
  getSearch({
    pages,text
}).then(res=>res.json())
.then(res=>{
   setSearchData(res)
   console.log(res)
 })
}


const handleChange = (e)=>{
  setText(e.target.value)
}


  return (
    <>
   <div className="navbar">
       <div className = "logo">
        <Link to="/"><img src="data:image/png;base64,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" alt="logo"/></Link> 
       </div>
       <div className = "left-option">
       <Link to="/womens"className="women"><div>Women</div></Link> 
        <Link to="/mens" className="men"><div>Men</div></Link>
        <Link to="/girls" className = "girls"><div>Girls</div></Link>
        <Link to="/boys"  className = "boys"><div>Boys</div></Link>
       </div>
       <div className="search">
       <FaSearch color="#9d9e9c" className="searchIcon" />
        <input placeholder="What are you looking for"  onChange={handleChange} value={text}/>
       </div>
       <div className= "right-option">
        <div>More</div>
        <div> <ModalNavbar  /></div>
        <div><MdFavoriteBorder className="favrt" /></div>
        <div><BsHandbag className="cart"/> </div>
       </div>
    
   </div>

   <Box mt="40px" w="100%">
     <SimpleGrid columns={[1,2,3,4]} spacing={5}>
    {   
         SearchData&&SearchData.map((item)=>
             <Box>
                <Stack>
                <Img src={item.image} alt={item.name} h="400px" />
                <Text fontWeight={700}>₹ {item.price}</Text>
                <Text>{item.description}</Text>
                <Button colorScheme='blue' >Add TO Basket</Button>
                </Stack>
             </Box>
    )
    } 
     </SimpleGrid>
    </Box>  
</>

  );
};

export default Navbar;
