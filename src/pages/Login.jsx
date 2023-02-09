import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import CustomInput from '../components/CustomInput';
import { SET_LOGIN, SET_TOKEN, SET_USER } from '../redux//auth/authSlice';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  VStack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import loginImage from '../assets/register-img.svg';
import { loginUser } from '../redux/auth/authService';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tryLogin = async (userLogin) => {
    setIsLoading(true);
    try {
      const data = await loginUser(userLogin);

      console.log(data);
      console.log(data.user);

      console.log('After dispatch');
      if (data.token && data.user) {
        dispatch(SET_LOGIN(true));
        dispatch(SET_TOKEN(data.token));
        dispatch(SET_USER(data.user));
        navigate('/dashboard');
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Box h='100vh' bg='white' color='gray.500'>
      <Flex justify='space-around' h='93.5vh' align='center'>
        <Box display={['none', 'none', 'flex']}>
          <img src={loginImage} alt='register' height={650} width={650} />
        </Box>
        <VStack spacing={5} align={['center', 'center', 'flex-start']}>
          <Heading color='purple.500'>Welcome Back</Heading>
          <Formik
            initialValues={{ emailAddress: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
              tryLogin(values);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <VStack spacing={5} align={['center', 'center', 'flex-start']}>
                <Form onSubmit={handleSubmit}>
                  <FormControl
                    isInvalid={!!errors.emailAddress && touched.emailAddress}
                    marginBottom='1em'
                  >
                    <CustomInput
                      label='Email Address'
                      name='emailAddress'
                      type='text'
                      placeholder='Enter Email address'
                      // validate={(value) => {
                      //   let error;
                      //   if (!value) {
                      //     error = 'Enter a valid email address';
                      //   }
                      //   return error;
                      // }}
                    />
                    <FormErrorMessage>{errors.emailAddress}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                    marginBottom='1em'
                  >
                    <CustomInput
                      label='Enter Password'
                      name='password'
                      type='password'
                      placeholder='Enter Password'
                      validate={(value) => {
                        let error;
                        if (value.length < 6) {
                          error = 'Password must contain at least 6 characters';
                        }
                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Button type='submit' colorScheme='purple' w='full'>
                    {isLoading ? 'Loading...' : 'LOGIN'}
                  </Button>
                </Form>
                <Box w='full' display='flex' justifyContent='center'>
                  Don't have an account?
                  <Text color='purple' ml={2}>
                    <Link to='/register'>Signup</Link>
                  </Text>
                </Box>
              </VStack>
            )}
          </Formik>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Login;
