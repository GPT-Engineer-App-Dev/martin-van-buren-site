import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} px={8} bg="gray.100">
      <Text textAlign="center">&copy; {new Date().getFullYear()} Martin Van Buren Website. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
