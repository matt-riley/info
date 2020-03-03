import React from "react";
import NextLink from "next/link";
import {Flex, Box, Link, Text} from "rebass";

export default ({ pathname }) => (
  <header>
    <Flex
      px={2}
      bg='muted'
      alignItems='center'
      color='secondary'
    >
      <Text p={2} fontWeight="bold">Matt Riley</Text>
      <Box mx="auto" />
      <Link variant="nav" href="/">Home</Link>{" "}
      <Link variant="nav" href="/about">About</Link>{" "}
      <Link variant="nav" href="/uses">Uses</Link>{" "}
      <Link variant="nav" href="/blog">Blog</Link>
    </Flex>
  </header>
);
