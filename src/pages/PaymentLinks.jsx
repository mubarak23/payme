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
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const PaymentLinks = () => {
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
                  Active Payment Links
                </Heading>
              </Box>
              <Spacer />
              <ButtonGroup gap='1'>
                <Button colorScheme='teal'>Create a Payment link</Button>
              </ButtonGroup>
            </Flex>
            <hr />
            <TableContainer>
              <Table variant='simple'>
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Full Name</Th>
                    <Th>Link</Th>
                    <Th>Amount</Th>
                    <Th>Status</Th>
                    <Th>Social Share</Th>
                    <Th>Actions</Th>
                    <Th>Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>John Doe</Td>
                    <Td>
                      <a href='https://checkout.paystack.com/4g7bctrlcpbfzt7'>
                        View Link
                      </a>
                    </Td>
                    <Td>N25,000</Td>
                    <Td>Unpaid</Td>
                    <Td>
                      <HStack>
                        <Button
                          colorScheme='whatsapp'
                          leftIcon={<faWhatsapp />}
                        >
                          WhatsApp
                        </Button>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Via Mail
                        </Button>
                      </HStack>
                    </Td>
                    <Td>
                      <Button>CHeck Status</Button>
                    </Td>
                    <Td>View Details</Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe</Td>
                    <Td>
                      <a href='https://checkout.paystack.com/4g7bctrlcpbfzt7'>
                        View Link
                      </a>
                    </Td>
                    <Td>N150,000</Td>
                    <Td>Unpaid</Td>
                    <Td>
                      <HStack>
                        <Button
                          colorScheme='whatsapp'
                          leftIcon={<faWhatsapp />}
                        >
                          WhatsApp
                        </Button>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Via Mail
                        </Button>
                      </HStack>
                    </Td>
                    <Td>
                      <Button>CHeck Status</Button>
                    </Td>
                    <Td>View Details</Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe</Td>
                    <Td>
                      <a href='https://checkout.paystack.com/4g7bctrlcpbfzt7'>
                        View Link
                      </a>
                    </Td>
                    <Td>N505,000</Td>
                    <Td>Unpaid</Td>
                    <Td>
                      <HStack>
                        <Button
                          colorScheme='whatsapp'
                          leftIcon={<faWhatsapp />}
                        >
                          WhatsApp
                        </Button>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Via Mail
                        </Button>
                      </HStack>
                    </Td>
                    <Td>
                      <Button>CHeck Status</Button>
                    </Td>
                    <Td>View Details</Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe</Td>
                    <Td>
                      <a href='https://checkout.paystack.com/4g7bctrlcpbfzt7'>
                        View Link
                      </a>
                    </Td>
                    <Td>N100</Td>
                    <Td>Paid</Td>
                    <Td>
                      <HStack>
                        <Button
                          colorScheme='whatsapp'
                          leftIcon={<faWhatsapp />}
                        >
                          WhatsApp
                        </Button>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Via Mail
                        </Button>
                      </HStack>
                    </Td>
                    <Td>
                      <Button>Check Status</Button>
                    </Td>
                    <Td>View Details</Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe</Td>
                    <Td>
                      <a href='https://checkout.paystack.com/f00cxfj26kwtwcb'>
                        View Link
                      </a>
                    </Td>
                    <Td>N2,000</Td>
                    <Td>Paid</Td>
                    <Td>
                      <HStack>
                        <Button
                          colorScheme='whatsapp'
                          leftIcon={<faWhatsapp />}
                        >
                          WhatsApp
                        </Button>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Via Mail
                        </Button>
                      </HStack>
                    </Td>
                    <Td>
                      <Button>Check Status</Button>
                    </Td>
                    <Td>View Details</Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe</Td>
                    <Td>
                      <a href='https://checkout.paystack.com/9f4abkhryxfix4a'>
                        View Link
                      </a>
                    </Td>
                    <Td>N10,000</Td>
                    <Td>Unpaid</Td>
                    <Td>
                      <HStack>
                        <Button
                          colorScheme='whatsapp'
                          leftIcon={<faWhatsapp />}
                        >
                          WhatsApp
                        </Button>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Via Mail
                        </Button>
                      </HStack>
                    </Td>
                    <Td>
                      <Button>CHeck Status</Button>
                    </Td>
                    <Td>View Details</Td>
                  </Tr>
                  <Tr>
                    <Td>John Doe</Td>
                    <Td>
                      <a href='https://checkout.paystack.com/bt41bnw8i0tofqx'>
                        View Link
                      </a>
                    </Td>
                    <Td>N1,000</Td>
                    <Td>Unpaid</Td>
                    <Td>
                      <HStack>
                        <Button
                          colorScheme='whatsapp'
                          leftIcon={<faWhatsapp />}
                        >
                          WhatsApp
                        </Button>
                        <Button colorScheme='twitter' leftIcon={<faMail />}>
                          Via Mail
                        </Button>
                      </HStack>
                    </Td>
                    <Td>
                      <Button>CHeck Status</Button>
                    </Td>
                    <Td>View Details</Td>
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

export default PaymentLinks;
