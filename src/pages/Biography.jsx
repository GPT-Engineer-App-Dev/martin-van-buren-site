import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";
import Header from "../components/Header";

const Biography = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Header />
      <VStack spacing={8} maxW="4xl" mx="auto" py={12} px={6}>
        <Heading as="h1" size="2xl">
          Biography of Martin Van Buren
        </Heading>
        <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra sapien turpis, nec ultricies dolor aliquam non. Cras porttitor lobortis ligula at dapibus. Praesent luctus erat eu nisi tincidunt, sed molestie lorem convallis.</Text>
        <Image src="https://images.unsplash.com/photo-1600716887304-382af77ee86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbGQlMjBob3VzZXxlbnwwfHx8fDE2ODEzOTg0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Birthplace" />
        <Text fontSize="lg">Sed id feugiat turpis. Quisque semper magna eu purus malesuada, at malesuada sapien tincidunt. Donec tincidunt risus tellus, at aliquam neque pellentesque vel. Morbi ullamcorper eros quis est consequat, a bibendum urna mollis.</Text>
        <Text fontSize="lg">Sed venenatis tincidunt justo sit amet dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce rutrum augue id nisi tincidunt, vitae bibendum velit malesuada.</Text>
        <Image src="https://images.unsplash.com/photo-1519432359229-3e65f43d7c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGhvdXNlfGVufDB8fHx8MTY4MTM5ODQ4MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="White House" />
        <Text fontSize="lg">Aliquam euismod, tellus sit amet bibendum malesuada, sapien velit bibendum sapien, sit amet rhoncus sapien elit id nisi. Sed euismod risus sit amet massa congue, id bibendum nisl congue.</Text>
        <Text fontSize="lg">Proin auctor quam vel felis tincidunt laoreet. Quisque id ex lobortis, pulvinar lectus ac, ullamcorper erat. Sed id erat id augue viverra sodales vel non enim.</Text>
      </VStack>
    </Box>
  );
};

export default Biography;
