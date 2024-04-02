import { VStack, Box, Image, Input, Button, Text, Flex, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const AuthForm = () => {
    const [isLogIn, setIsLogin] = useState('False')
  return (
    <>
     <Box border={"1px solid gray"} borderRadius={4} padding={5}>
     <VStack spacing={4}>
    <Image src="./logo.png" h={24} cursor={"pointer"} alt="Instagram"/>
    <Input placeholder="Email" fontSize={14} type='email'/>    
    <Input placeholder="Password" fontSize={14} type='password' />
    {!isLogIn ? <Input placeholder="Confirm Password" fontSize={14} type='password' /> : null}
    <Button w={'full'} colorScheme='blue' fontSize={14}> 
    {isLogIn ? "Login": "Sign Up"}
    </Button>

  {/* ---------------- OR -------------- */}
  <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
    <Box flex={2} h={"1px"} bg={"gray.400"} />
    <Text mx={1} color={"white"}>
      OR
    </Text>
    <Box flex={2} h={"1px"} bg={"gray.400"} />
  </Flex>

  <Flex flex={2} h={"1px"} justifyContent={"center"} alignItems={'center'}>
    <Image src='./google.png' h={6} cursor={'pointer'} alt='Google'/>
    <Text mx={1} color={"blue.800"}>Log in with Google</Text>
  </Flex>
    </VStack>
    </Box>

    <Box border={"1px solid gray"} borderRadius={4} padding={5}> 
    <Flex justifyContent={'center'} alignItems={'center'}>
      <HStack spacing={2}>
      <Text color={'white'} fontSize={14}> Don't have an account?  </Text>
      <Text color={'blue.800'} fontSize={14} cursor={'pointer'} onClick={ ()=> setIsLogin(!isLogIn) }> Sign up </Text>
      </HStack>
    </Flex>
    </Box>

    </>
  )
}

export default AuthForm
