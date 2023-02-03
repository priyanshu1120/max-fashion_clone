
import { Box, VStack,Heading,Stack,Flex, SimpleGrid, Img,Text,Button, propNames } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import "../WomensPage/WomensPage.css"
import Pagination from '../Pagination'
import { getGirl } from '../Api/Api'
import { getGirlAll } from '../Api/Api'



const GirlsPage = () => {


    const [girlData,setGirlData] = useState([])
    const [pages,setPages] = useState(1)
    const [name,setName] = useState("Tops")
   
    useEffect(()=>{
        getData({pages,name})
    },[pages,name])

     
    useEffect(()=> {
      getGirlAll()
      .then(res=>res.json())
      .then(res=>{
          setGirlData(res)
          console.log(res)
        })
  },[])

   const getData=({pages,name})=>{
      getGirl({
        pages,name
   }).then(res=>res.json())
   .then(res=>{
       setGirlData(res)
       console.log(res)
     })
    }

    const handlePages=(value)=>{
      setPages(pages+value)
      getData(pages,name)
    }

    const handleTop=()=>{
      setName("baby girls")
      getData(pages,name)
    }
   const handleIndianWear =()=>{
    setName("Indian Wear")
    getData(pages,name)
   
  }
  
    const handleSportWear =()=>{
    setName("Sport Wear")
    getData(pages,name)
  
  }


  console.log(name)

  return (
   <Box w={["100%","90%","95%"]} m="auto" mt="20px">
    <Box>
       <Heading fontFamily="sans-serif" fontStyle={24}>You Searched For Girls</Heading>
     
       <SimpleGrid  columns={[4,4,8,8]} w="95%" h="70px" spacing={2} mt="20px">
       <Box display="flex" justifyContent="center"  alignItems="center" color="#929394" fontWeight={500}>Shop For</Box>
         <Box cursor="pointer" onClick={handleTop} border="1px solid green" display="flex" borderRadius={2} justifyContent="space-between" alignItems="center"><Img src="/images/women-top.png" w="40px"h="40px"/><Text>Topes & Toes</Text></Box>
         <Box cursor="pointer" onClick={handleIndianWear} border="1px solid green" display="flex" borderRadius={2} justifyContent="space-between" alignItems="center"><Img src="/images/indianWearWomen.png" w="40px"h="40px"/><Text>Indian Wear</Text></Box>
         <Box cursor="pointer" onClick={handleSportWear} border="1px solid green" display="flex" borderRadius={2} justifyContent="space-between" alignItems="center" ><Img src="/images/womensport.png" w="40px"h="40px"/><Text>Sports Wear</Text></Box>
         <Box cursor="pointer" onClick={handleTop} border="1px solid green" display="flex" borderRadius={2} justifyContent="space-between" alignItems="center"><Img src="/images/bottomwomen.png" w="40px"h="40px"/><Text>Bottom Wear</Text></Box>
         <Box cursor="pointer" onClick={handleTop} border="1px solid green"display="flex" borderRadius={2} justifyContent="space-between" alignItems="center"><Img src="/images/sleepwearwomen.png" w="40px"h="40px"/><Text>Sleep Wear</Text></Box>
         <Box cursor="pointer" onClick={handleTop} border="1px solid green"display="flex" borderRadius={2} justifyContent="space-between" alignItems="center"><Img src="/images/footwearwomen.png" w="40px"h="40px"/><Text>Footwear</Text></Box>
         <Box cursor="pointer" onClick={handleTop}  border="1px solid green"display="flex" borderRadius={2} justifyContent="space-between" alignItems="center"><Img src="/images/winterwomen.png" w="40px"h="40px"/><Text>Winter Wear</Text></Box>
       </SimpleGrid>
      </Box>
      
     <Box border="1px solid cyan" w="100%" h="100px" mt="30px" bg="#f7f8f7" display="flex" alignItems="center">
        <div className="select-option">
          <div>
            <div>Price</div>
            <div>
              <select id="price">
                <option>₹ 599</option>
                <option>₹ 699</option>
                <option>₹ 999</option>
                <option>₹ 1299</option>
                <option>₹ 1499</option>
              </select>
              </div>
          </div>
          <div>
            <div>Browse</div>
            <div>
              <select>

                 <option>New</option>
                <option>Availbale</option>
                <option>Online</option>
              </select>
              </div>
          </div>
          <div>
            <div>Color-Family</div>
            <div>
              <select>
                <option>red</option>
                <option>black</option>
                <option>pink</option>
                <option>brown</option>
                <option>blue</option>
                <option>green</option>  
              </select>
              </div>
          </div>
          <div>
             <div>Size</div>
            <div>
              <select>
              <option>small</option>
                <option>medium</option>
                <option>large</option>
                <option>Xlarge</option> 
              </select>
              </div>
          </div>
          <div>
             <div>Type</div>
            <div>
              <select>
                <option>tops</option>
                <option>jeans</option>
                <option>casual</option>
                <option>formal</option>
             </select>    
            </div>
          </div>
        </div> 
     </Box>
       

       
    <Box mt="40px" w="100%">
     <SimpleGrid columns={[1,2,3,4]} spacing={5}>
    {   
         girlData&&girlData.map((item)=>
             <Box>
                <Stack>
                <Img src={item.image} alt={item.name} h="400px" />
                <Text fontWeight={700}>₹ {item.price}</Text>
                <Text>{item.description}</Text>
                <Button colorScheme='blue' onClick = {()=>alert("Product Added Successfully")} >Add TO Basket</Button>
                </Stack>
             </Box>
    )
    } 
     </SimpleGrid>
     <Box m="auto" border="1px solid blue" w="20%" h="40px" mt="70px" display="flex" justifyContent="center" alignItem="center">
     <Pagination pages={pages} handleChange={handlePages} />
      </Box>
   
    </Box>

   </Box>

  )
}

export default GirlsPage