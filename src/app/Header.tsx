import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  return (
    <Box as="header">
      <Flex
        bg="white"
        color="gray.600"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
      >
        <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
          <Heading as="h1" size="lg">
            <NextLink href="/">Blog App</NextLink>
          </Heading>
          <NextLink href="/articles/new">
            <Button
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="orange.400"
              _hover={{
                bg: "orange.300",
              }}
            >
              記事を書く
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
}
