import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input, InputGroup } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import axios from "axios"
import { Radio, RadioGroup, Select, Stack, Text, useToast } from "@chakra-ui/react";
import { useFetch } from "../CustomHooks/useFetch";
import { baseurl } from "./Api/Api";

const prodObj = {
  image: [],
  title: "",
  description: "",
  price: "",
  color: [],
  size: [],
  category: "",
  gender: "",
};

const AddProduct = ({getData}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState(prodObj);
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const toast = useToast();

  const navigate = useNavigate();

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let imagearr = [];
    let size = [];
    let color = [];
    if (name == "image") {
      imagearr.push(value);
      setProduct({ ...product, [name]: [value] });
    } else if (name == "size") {
      size.push(value);
      setProduct({ ...product, [name]: [value] });
    } else if (name == "color") {
      color.push(value);
      setProduct({ ...product, [name]: [value] });
    } else {
      setProduct({ ...product, [name]: value });
    }

  };
  


  const handleProduct = () => {
          axios.post(`${baseurl}/create`,product)
          .then((res)=>{
              getData() 
              toast({
                title: 'Product added successfully.',
                status: 'success',
                duration: 1500,
                isClosable: true,
                position:"top",
              })
          }).catch((err)=>{
            alert("something went wrong")
          })
          setProduct({ ...product, image: [],price: "", color: [],size: []});  
          onClose()
  };

  return (
    <>
      <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction='row'>
          <Radio display={"none"} value='inside'>inside</Radio>
        </Stack>
      </RadioGroup>
      <Button onClick={onOpen} color="black">
        Add Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md", "xl"]}  scrollBehavior={scrollBehavior} >
        <ModalOverlay />
        <ModalContent p="40px">
          <ModalHeader>
            <Text fontSize={24}>Add Products</Text>
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
                color="#718096"
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
                color="#718096"
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
                color="#718096"
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
                color="#718096"
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
                color="#718096"
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
                placeholder="Color*"
                required
                color="#718096"
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
                placeholder="Size*"
                color="#718096"
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
                placeholder="Type*"
                color="#718096"
                fontSize={18}
              >
                <option value="mens">mens</option>
                <option value="women">women</option>
                <option value="boys">boys</option>
                <option value="girls">girls</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="#df1e2e" onClick={handleProduct} color="white" mr={3}>
              Add
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

export default AddProduct;
