// Sidebar.js

import React from 'react';
import { MdHome, MdOutlineSearch, MdExplore } from "react-icons/md";
import { Box, Flex, Text, VStack, IconButton, useColorModeValue, Image } from '@chakra-ui/react';

const Sidebar = ({ isOpen, toggle }) => {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      position="flex"
      left={0}
      top={0}
      h="100vh"
      w="250px"
      bg={bgColor}
      boxShadow="lg"
      zIndex="999"
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
    >
      <Flex justify="space-between" align="center" p="4">
        <Image src='./logo.png'/>
      </Flex>
      <VStack spacing="6" p="4">

        <Flex justifyContent={'center'} alignItems={'center'} cursor={'pointer'}>
        <MdHome fontSize={22} />
        <Text fontSize={20}> Home</Text>
        </Flex>
        
        <Flex justifyContent={'center'} alignItems={'center'} cursor={'pointer'}>
        <MdOutlineSearch fontSize={22} />
        <Text fontSize={20} > Search</Text>
        </Flex>
        
        <Flex justifyContent={'center'} alignItems={'center'} cursor={'pointer'}>
        <MdExplore fontSize={22} />
        <Text fontSize={20}> Explore</Text>
        </Flex>

        {/* Add more menu items as needed */}
      </VStack>
    </Box>
  );
};

export default Sidebar;
