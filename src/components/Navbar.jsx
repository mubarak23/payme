import React from 'react';
import { Box, Flex, Heading, Spacer, Icon, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { IoLogOutOutline } from 'react-icons/io5';
import { selectUser } from '../redux/auth/authSlice';
import { logoutUser } from '../redux/auth/authService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_TOKEN, SET_USER } from '../redux/auth/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logout = async () => {
    try {
      localStorage.removeItem('token');
      const isLogout = await logoutUser();
      console.log(isLogout);
      if (isLogout) {
        dispatch(SET_LOGIN(false));
        dispatch(SET_TOKEN(''));
        dispatch(SET_USER(''));
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex p='4'>
      <Box>
        <Link to={'/'}>
          <Heading size='lg' textColor='purple.500' cursor='pointer'>
            PayMe
          </Heading>
        </Link>
      </Box>
      <Spacer />
      {!user ? (
        <>
          <Flex gap='3' alignItems={'center'}>
            <Link to={'/login'}>Login</Link>
          </Flex>
          <Flex gap='3' alignItems={'center'} m={3}>
            <Link to={'/register'}>Register</Link>
          </Flex>
        </>
      ) : (
        <>
          <Flex gap='3' alignItems={'center'}>
            <Link to={'/dashboard'}>
              <Icon as={CgProfile} w={6} h={6} />
            </Link>
            <IconButton
              aria-label='Log out'
              icon={<IoLogOutOutline w={6} h={6} />}
              onClick={logout}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
