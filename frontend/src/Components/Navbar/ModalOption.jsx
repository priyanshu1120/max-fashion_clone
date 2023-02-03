import React,{useState} from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Heading,
    Tag,
    Text,
    Input,PinInput, PinInputField ,HStack, SimpleGrid

  } from '@chakra-ui/react'
  import {Link} from "react-router-dom"

  function ModalOption({open,setVisible}) {
   const onClose = ()=>{
        setVisible(false)
   }
    return (
      <>
     
  
        <Modal isOpen={open} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="s" mt="100px">
            <ModalCloseButton />
            <ModalBody>
             <SimpleGrid>
                <Box>
                <div>
            <p><b>Women</b></p>
            <Link to="/mens"><p>Tops</p></Link>
            <p>Dresses & Jumpsuits</p>
            <p>Sportswear</p>
            <p>Bottoms</p>
            <p>Winterwear</p>
            <p>Ethnicwear</p>
            <p>Lingerie</p>
            <p>Sleepwear</p>
            <p>Accessories</p>
            <p>Shoes</p>
          </div> 
                </Box>
             </SimpleGrid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalOption