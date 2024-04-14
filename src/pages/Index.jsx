import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";
import Header from "../components/Header";

const Index = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Header />
      <VStack spacing={8} maxW="4xl" mx="auto" py={12} px={6}>
        <Image src="https://images.unsplash.com/photo-1585076799833-08afc3d50d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJ0aW4lMjB2YW4lMjBidXJlbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzA2NzQ0OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Martin Van Buren portrait" borderRadius="full" boxSize="300px" />
        <Heading as="h1" size="2xl">
          Martin Van Buren
        </Heading>
        <Heading as="h2" size="xl" fontWeight="normal" color="gray.600">
          8th President of the United States
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra sapien turpis, nec ultricies dolor aliquam non. Cras porttitor lobortis ligula at dapibus. Praesent luctus erat eu nisi tincidunt, sed molestie lorem convallis. Sed id feugiat turpis. Quisque semper magna eu purus malesuada, at malesuada sapien tincidunt.
        </Text>
        <Text fontSize="lg" textAlign="center">
          Donec tincidunt risus tellus, at aliquam neque pellentesque vel. Morbi ullamcorper eros quis est consequat, a bibendum urna mollis. Sed venenatis tincidunt justo sit amet dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;
