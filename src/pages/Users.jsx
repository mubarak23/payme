import React from 'react';
import {
  Box,
  Button,
  Heading,
  TableContainer,
  ButtonGroup,
  Table,
  Tbody,
  Thead,
  TableCaption,
  HStack,
  Spacer,
  Flex,
  Th,
  Td,
  Tr,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Users = () => {
  return (
    <>
      <Navbar />
      <Box display='flex'>
        <Sidebar />
        <Box flex={10}>
          <Box
            w='full'
            p={5}
            minH='calc(100vh - 80px)'
            margin='0 auto'
            borderWidth='1px'
            // borderRadius="lg"
            boxShadow='xl'
            display='flex'
            // justifyContent="center"
            flexDirection='column'
          >
            <Flex minWidth='max-content' alignItems='center' gap='2'>
              <Box p='2'>
                <Heading borderBottomWidth='1px' fontSize={18} marginBottom={5}>
                  Active Users
                </Heading>
              </Box>
            </Flex>

            <TableContainer>
              <Table variant='simple'>
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Full Name</Th>
                    <Th>Email Address</Th>
                    <Th> Active Links</Th>
                    <Th>Status</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>John Doe Drama </Td>
                    <Td>JohnDoe@gmail.com</Td>
                    <Td>2</Td>
                    <Td>Active</Td>
                    <Td>
                      <HStack>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Deactivate Account
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe Drama </Td>
                    <Td>JohnDoe@gmail.com</Td>
                    <Td>2</Td>
                    <Td>Active</Td>
                    <Td>
                      <HStack>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Deactivate Account
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe Drama </Td>
                    <Td>JohnDoe@gmail.com</Td>
                    <Td>2</Td>
                    <Td>Active</Td>
                    <Td>
                      <HStack>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Deactivate Account
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe Drama </Td>
                    <Td>JohnDoe@gmail.com</Td>
                    <Td>2</Td>
                    <Td>Active</Td>
                    <Td>
                      <HStack>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Deactivate Account
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe Drama </Td>
                    <Td>JohnDoe@gmail.com</Td>
                    <Td>2</Td>
                    <Td>Active</Td>
                    <Td>
                      <HStack>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Deactivate Account
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Users;
