import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { AiOutlineUser, AiFillShopping, AiFillMail } from 'react-icons/ai';

const sidebarMenu = [
  {
    name: 'Account',
    icon: AiOutlineUser,
    to: '/dashboard',
  },
  {
    name: 'View Payment Links',
    icon: AiFillMail,
    to: '/paymentlinks',
  },
  {
    name: 'Users',
    icon: AiOutlineUser,
    to: '/users',
  },
  {
    name: 'Bank Account',
    icon: AiFillShopping,
    to: '/add-bank-account',
  },
  {
    name: 'Create Payment Link',
    icon: AiFillShopping,
    to: '/create-payment-link',
  },
  {
    name: 'Create Dedicated Account',
    icon: AiFillMail,
    to: '/create-dedicated-account',
  },
  {
    name: 'View Cash Out',
    icon: AiFillMail,
    to: '/view-cashout',
  },
];

const Sidebar = () => {
  return (
    <Box
      flex={2}
      minH='calc(100vh - 80px)'
      paddingTop={5}
      display='flex'
      bg='#020202'
      color='#fff'
    >
      <Flex flexDirection='column' w='full'>
        {sidebarMenu.map((item) => {
          return (
            <Box
              w='full'
              cursor='pointer'
              _hover={{
                bg: '#805AD5',
                color: '#fff',
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}
              mb={2}
              fontSize={18}
              p='1'
              fontWeight='bold'
              key={item.to}
            >
              <Link to={item.to}>
                <Flex alignItems='center' p='2' pl={4}>
                  <Icon as={item.icon} fontSize='2xl' w={6} h={6} />
                  <Text ml='1rem' fontSize='sm'>
                    {item.name}
                  </Text>
                </Flex>
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Sidebar;
