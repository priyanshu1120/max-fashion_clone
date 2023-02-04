import { Box, useToast } from "@chakra-ui/react"
import React from "raect"

export const Helper = ({status,text})=>{
  const toast = useToast()
    return (
      <Box>
       {
        
        toast({
                title: text,
                status: status,
                duration: 1500,
                isClosable: true,
                position:"top",
              })
       }
      </Box>
    )
}