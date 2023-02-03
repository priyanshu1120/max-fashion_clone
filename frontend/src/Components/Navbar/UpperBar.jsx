import React from "react";
import { Link, Box, Flex, Text } from "@chakra-ui/react";
import {
  MdLocalShipping,
  MdOutlineStore,
  MdCardGiftcard,
} from "react-icons/md";
// import {Link} from "react-router-dom"
const UpperBar = () => {
  return (
    <Flex
      maxW="100%"
      h="40px"
      bg="black"
      justifyContent="space-between"
      alignItems="center"
      pl="20px"
      pr="20px"
    >
      <Box w="40%" h="35px" display="flex" justifyContent="space-between">
        <Box
          w="30%"
          h="30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="10px"
        >
          <MdLocalShipping color="white" size="25px" />
          <Text color="white" fontWeight={600}>
            Free Shipping
          </Text>
        </Box>
        <Box
          w="32%"
          h="30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="10px"
        >
          <MdOutlineStore color="white" size="25px" />
          <Text color="white" fontWeight={600}>
            Return To Store
          </Text>
        </Box>
        <Box
          w="30%"
          h="30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="10px"
        >
          <MdCardGiftcard color="white" size="25px" />
          <Text color="white" fontWeight={600}>
            Click & Collect
          </Text>
        </Box>
      </Box>
      <Box w="30%" h="35px" display="flex" justifyContent="space-between">
        <Box
          w="35%"
          h="30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text color="white" fontSize="14px">
            Download Our App
          </Text>
          <Text color="gray" fontSize="14px">
            |
          </Text>
        </Box>
        <Box
          w="25%"
          h="30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text color="white" fontSize="14px">
            Store Locator{" "}
          </Text>
          <Text color="gray" fontSize="14px">
            |
          </Text>
        </Box>
        <Box
          w="25%"
          h="30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text color="white" fontSize="14px">
            Help
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default UpperBar;
