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
import {FiEdit} from "react-icons/fi"
import { Helper } from "../Helper";
import { baseurl } from "../Utils/Api";



const EditProduct = ({data,getData}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState( { image: [data.image],
    title: data.title,
    description: data.description,
    price: data.price,
    color: [data.color],
    size: [data.size],
    category: data.category,
    gender: data.gender,});
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const toast = useToast();
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "image") {
      setProduct({ ...product, [name]: [value] });
    } else if (name == "size") {
      setProduct({ ...product, [name]: [value] });
    } else if (name == "color") {
      setProduct({ ...product, [name]: [value] });
    } else {
      setProduct({ ...product, [name]: value });
    }

  };


  const handleProduct = () => {
          axios.patch(`${baseurl}/update/${data._id}`,product)
          .then((res)=>{
              getData() 
              toast({
                title: 'Product edit successfully.',
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
      <FiEdit onClick ={onOpen} fontSize={"24px"} color="blue" />
      </Box>
   
      <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md", "xl"]}  scrollBehavior={scrollBehavior} >
        <ModalOverlay />
        <ModalContent p="40px">
          <ModalHeader>
            <Text fontSize={24}>Edit Products</Text>
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

            <FormControl mt={6}>
              <FormLabel fontSize={"12px"} color="#949494">
                title*
              </FormLabel>
              <Input
                variant="unstyled"
                rounded="none"
                borderBottom={"1px solid #949494"}
                color="black"
                name="title"
                onChange={handleInputChange}
                value={product.title}
                placeholder="title*"
              />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel fontSize={"12px"} color="#949494">
                category*
              </FormLabel>
              <Input
                variant="unstyled"
                rounded="none"
                borderBottom={"1px solid #949494"}
                color="black"
                name="category"
                onChange={handleInputChange}
                value={product.category}
                placeholder="Category*"
              />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel fontSize={"12px"} color="#949494">
                price*
              </FormLabel>
              <Input
                variant="unstyled"
                rounded="none"
                borderBottom={"1px solid #949494"}
                color="black"
                name="price"
                onChange={handleInputChange}
                value={product.price}
                placeholder="price*"
              />
            </FormControl>


            <FormControl mt={6}>
              <FormLabel fontSize={"12px"} color="#949494">
                description*
              </FormLabel>
              <Input
                variant="unstyled"
                rounded="none"
                borderBottom={"1px solid #949494"}
                color="black"
                name="description"
                onChange={handleInputChange}
                value={product.description}
                placeholder="description*"
              />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel fontSize={"12px"} color="#949494">
                Color*
              </FormLabel>
              <Select
                variant="unstyled"
                name="color"
                borderBottom={"1px solid #949494"}
                rounded="none"
                onChange={handleInputChange}
                value={product.color}
                required
                color="black"
                fontSize={18}
              >
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="black">black</option>
                <option value="white">white</option>
              </Select>
            </FormControl>

            <FormControl mt={6}>
              <FormLabel fontSize={"12px"} color="#949494">
                Size*
              </FormLabel>
              <Select
                variant="unstyled"
                name="size"
                borderBottom={"1px solid #949494"}
                rounded="none"
                onChange={handleInputChange}
                required
                value={product.size}
                color="black"
                fontSize={18}
              >
                <option value="XL">XL</option>
                <option value="SM">SM</option>
                <option value="XLL">XLL</option>
                <option value="MD">MD</option>
              </Select>
            </FormControl>

            <FormControl mt={6}>
              <FormLabel fontSize={"12px"} color="#949494">
                Type*
              </FormLabel>
              <Select
                variant="unstyled"
                name="gender"
                borderBottom={"1px solid #949494"}
                rounded="none"
                onChange={handleInputChange}
                required
                value={product.gender}
                color="black"
                fontSize={18}
              >
                <option value="mens">mens</option>
                <option value="women">women</option>
                <option value="boy">boys</option>
                <option value="girl">girls</option>
              </Select>
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

export default EditProduct