import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Accomplishments = () => {
  return (
    <>
      <Header />
      <Box as="main" py={8} px={4}>
        <Heading as="h1" size="xl" mb={8}>
          Martin Van Buren's Presidential Accomplishments
        </Heading>
        
        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Establishing an Independent Treasury System
          </Heading>
          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
            nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam 
            nisl nisl sit amet nisl.
          </Text>
          <Image src="https://via.placeholder.com/500x300" alt="Placeholder" />
        </Box>

        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Preventing War with Britain over the Caroline Affair  
          </Heading>
          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
            nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam
            nisl nisl sit amet nisl.
          </Text>
          <Image src="https://via.placeholder.com/500x300" alt="Placeholder" />
        </Box>
        
        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Overseeing the Trail of Tears and Native American Removal Policies
          </Heading>
          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
            nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam
            nisl nisl sit amet nisl.  
          </Text>
          <Image src="https://via.placeholder.com/500x300" alt="Placeholder" />
        </Box>
        
      </Box>
      <Footer />
    </>
  );
};

export default Accomplishments;