import React,{useState} from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    Heading,
    Tag,
    Text,
    Input,PinInput, PinInputField ,HStack

  } from '@chakra-ui/react'

 export function ModalNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [visible,setVisible] = useState(true)
    const [count,setCount] = useState(30)
    const [time ,setTime] = useState(false)
    const handleClick = () => {
       setVisible(false)
         setTime(true); 
    }

    if(time==true){
        var id =  setTimeout(()=>{
            setCount(count-1)}
          ,1000)
    }
   

    if(count==0){
        clearTimeout(id)
       }

    return   visible==true ?
     (
      <>
        <Button onClick={onOpen} size="sm" fontSize={15} bg="#f7f8f7">Sign UP & Sign In </Button>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent  maxW="700px" mt="120px" h="420px">
         
            <ModalCloseButton />
            <ModalBody  width="80%" m="auto"mt="20px"p="45px">
             <Box>
                <Heading fontWeight={400} fontSize="34px">Sign up or Sign in</Heading>
                <Tag mt="10px" bg="white" color="#a6a7a5">Enjoy the convenience of a single account across all participating brands</Tag>
             </Box>
             <Box mt="10px">
                <Text fontSize={16} fontWeight={500}>Mobile Number</Text>
                <div style={{display:"flex", border:"2px solid blue" , marginTop:"10px" ,width:"100%",padding:"14px" }}>
                    <div>+91 |</div>
                    <div style={{paddingLeft:"10px"}}><input placeholder='Enter Your Number' style={{outline:"none"}} /> </div>
                </div>
             </Box>
             <Text mt={3}>By creating your account you agree to our <span style={{color:"blue"}}>Terms and Condition</span> </Text>
            </ModalBody>
  
            <ModalFooter>
             <Button  colorScheme= "blue" size="lg" fontSize="24px" onClick={()=>{handleClick()}}>continue</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    ):


      (
        <>
          <Button onClick={onOpen} size="sm" fontSize={15} bg="#f7f8f7">Sign UP & Sign In </Button>
    
          <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent  maxW="700px" mt="120px" h="420px">
           
              <ModalCloseButton />
              <ModalBody  width="80%" m="auto"mt="20px"p="45px">
               <Box>
                  <Heading fontWeight={400} fontSize="34px">Sign up or Sign in</Heading>
                  <Tag mt="10px" bg="white" color="#a6a7a5">Enjoy the convenience of a single account across all participating brands</Tag>
               </Box>
               <Box mt="10px">
                  <Text fontSize={16} fontWeight={500}>Verify With OTP</Text>
                  <Text>sent to +918057247701 <span style={{color:"blue"}}>change ?</span></Text>
                  <HStack mt="20px">
                        <PinInput size="lg">
                            <PinInputField  />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                   </HStack>
               </Box>
               <Text mt={3}>{count===0?"Didn't get it try again":`We've sent your code. Try again in 00.${count}`}</Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )
      
  }