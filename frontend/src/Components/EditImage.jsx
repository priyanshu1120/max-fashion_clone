import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input, InputGroup } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import axios from "axios"
import { Box, Radio, RadioGroup, Select, Stack, Text, useToast } from "@chakra-ui/react";
import {BsImages} from "react-icons/bs"
import { ToastExample } from "../Helper";
import { baseurl } from "../Utils/Api";


const EditImage = ({data,getData}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState( { image: [data.image],});
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const toast = useToast();
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "image") {
      setProduct({ ...product, [name]: value });
    }
  };




  const handleProduct = () => {
          axios.patch(`${baseurl}/updateimg/${data._id}`,product)
          .then((res)=>{
              getData() 
              toast({
                title: 'Image update successfully.',
                description: "new image added in same content.",
                status: 'success',
                duration: 1500,
                isClosable: true,
                position:"top",
              })
          }).catch((err)=>{
            alert("something went wrong")
          }) 
          onClose()
  };

  return (
    <>
      <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction='row'>
          <Radio display={"none"} value='inside'>inside</Radio>
        </Stack>
      </RadioGroup>
      <Box>
      <BsImages onClick ={onOpen} fontSize={"24px"} color="blue" />
      </Box>
   
      <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md", "xl"]}  scrollBehavior={scrollBehavior} >
        <ModalOverlay />
        <ModalContent p="40px">
          <ModalHeader>
            <Text fontSize={24}>Edit Image</Text>
          </ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontSize={"12px"} color="#949494">
                image*
              </FormLabel>
              <Input
                variant="unstyled"
                rounded="none"
                borderBottom={"1px solid #949494"}
                color="black"
                name="image"
                onChange={handleInputChange}
                value={product.image}
                placeholder="image*"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="#df1e2e" onClick={handleProduct} color="white" mr={3}>
              Update
            </Button>
            <Button onClick={onClose} color="blue">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditImage