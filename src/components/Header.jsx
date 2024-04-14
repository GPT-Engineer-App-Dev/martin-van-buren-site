import { Box, Heading, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box as="header" py={4} px={8} bg="gray.100">
      <Flex align="center">
        <Heading as="h1" size="xl">
          Martin Van Buren
        </Heading>
        <Spacer />
        <Link as={RouterLink} to="/" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/accomplishments">
          Accomplishments
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
