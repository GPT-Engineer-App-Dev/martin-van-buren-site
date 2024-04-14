import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Martin Van Buren
        </Heading>
      </Flex>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/biography">
          Biography
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
