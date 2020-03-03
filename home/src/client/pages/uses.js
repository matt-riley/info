import React from 'react';
import {Text, Flex, Heading, Box} from 'rebass';

export default () => (
  <React.Fragment>
    <Heading width={2/2} color="primary" textAlign="center" p="2" fontSize="7" fontWeight="800">USES</Heading>
    <Flex>
      <Box width={1/2}>
        <Text>Foo</Text>
      </Box>
      <Box width={1/2}>
        <Text>Foo</Text>
      </Box>
    </Flex>
  </React.Fragment>
)