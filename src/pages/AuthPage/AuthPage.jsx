import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <div>
      <Flex minH={"100vh"} justifyContent={"center"} alignContent={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left side */}
          <Box display={{base: "none", md: "block"}} >
            <Image src="./auth.png" h={650} alt="Phone Img" />
          </Box>
          {/* Right side */}
          <VStack spacing={4} align={'stretch'}>
            <AuthForm />
          <Box textAlign={"center"}>Get the app</Box>
          <Flex gap={5} justifyContent={"center"}>
          <Image src="./playstore.png" h={10}/>
          <Image src="./microsoft.png" h={10}/>
          </Flex>
          </VStack>
          </Flex>
        </Container>
      </Flex>
    </div>
  )
}

export default AuthPage
