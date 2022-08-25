// import { Box, SimpleGrid,Img ,Stack,Text,Button} from '@chakra-ui/react'
// import React ,{useState,useEffect}from 'react'


// const WomenItem = () => {
//     const [womendata,setWomenData] = useState([])
//     const [pages,setPages] = useState(1)
//     useEffect(()=>{
//       getWomen({
//         page:pages,
//         limit:16
//     }).then(res=>{
//         setWomenData(res.data)
//         console.log(res.data)
//       })
//     },[pages])
//     console.log(womendata)

// console.log(pages)
//   return (

//     <Box border="1px solid red" mt="40px" w="100%">
//      <SimpleGrid columns={[1,2,3,4]} spacing={5}>
//     {   
//          womendata&&womendata.map((item)=>
//              <Box>
//                 <Stack>
//                 <Img src={item.image} alt={item.name} h="400px" />
//                 <Text fontWeight={700}>₹ {item.price}</Text>
//                 <Text>{item.description}</Text>
//                 <Button color="white">Add TO Basket</Button>
//                 </Stack>
//              </Box>
//     )
//     } 
//      </SimpleGrid>
//      <Box m="auto" border="1px solid blue" w="20%" h="40px" mt="70px" display="flex" justifyContent="center" alignItem="center">
//      <Pagination page={pages} handleChange={setPages} />
//       </Box>
   
//     </Box>
//   )
// }

// export default WomenItem