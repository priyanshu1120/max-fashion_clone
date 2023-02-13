import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Text,
  SimpleGrid,
  Stack,
  Img,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import Pagination from "../Components/Pagination";
import AddProduct from "../Components/AddProduct";
import EditProduct from "../Components/EditProduct";
import EditImage from "../Components/EditImage";
import { useFetch } from "../CustomHooks/useFetch";
import { baseurl } from "../Utils/Api"; 

const Admin = () => {
  const [limit, setLimit] = useState(10);
  const [text, setText] = useState("");
  const toast = useToast();

  let url = baseurl;
  if (text.length > 0) {
    url = `${baseurl}/${text}?limit=${limit}`;
  }
  const { data, loading, getData, error } = useFetch(url);

  useEffect(() => {
    getData();
  }, [text, limit]);

  const handlePages = (value) => {
    setLimit(limit + value);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${baseurl}/delete/${id}`)
      .then((res) => {
        getData();
        toast({
          title: "Product deleted successfully.",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        alert("somthing went wrong");
      });
  };

  return (
    <>
      <Flex
        w="100%"
        h="70px"
        align={"center"}
        justify="space-around"
        position={"sticky"}
        top="0px"
        bg="black"
      >
        <Button color="black" onClick={() => setText("")}>
          ALL Product
        </Button>
        <Button color="black" onClick={() => setText("mens")}>
          Men
        </Button>
        <Button color="black" onClick={() => setText("women")}>
          Women
        </Button>
        <Button color="black" onClick={() => setText("boys")}>
          Boys
        </Button>
        <Button color="black" onClick={() => setText("girls")}>
          Girls
        </Button>
        <AddProduct getData={getData} />
      </Flex>
      <Box>
        <Box mt="40px" w="100%">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
            {data &&
              data.map((item) => (
                <Box>
                  <Stack border="1px solid ">
                    <Img src={item.image[0]} alt={item.name} h="300px" />
                    <Text fontWeight={700} textAlign="center">
                      ₹ {item.price}
                    </Text>
                    <Text textAlign="center">{item.category}</Text>
                    <Flex w="100%" justify={"space-around"}>
                      <Box>
                        <EditProduct data={item} getData={getData} />
                      </Box>
                      <Box>
                        <EditImage data={item} getData={getData} />
                      </Box>
                      <Box>
                        <MdDelete
                          onClick={() => handleDelete(item._id)}
                          fontSize={"24px"}
                          color="red"
                        />
                      </Box>
                    </Flex>
                  </Stack>
                </Box>
              ))}
          </SimpleGrid>
          <Box
            m="auto"
            border="1px solid blue"
            w="20%"
            h="40px"
            mt="70px"
            display="flex"
            justifyContent="center"
            alignItem="center"
          >
            <Pagination pages={limit} handleChange={handlePages} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
