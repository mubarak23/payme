import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  VStack,
  Button,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { registerUser } from '../redux/auth/authService';
import { SET_LOGIN, SET_TOKEN, SET_USER } from '../redux//auth/authSlice';
import loginImage from '../assets/register-img.svg';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tryRegister = async (userLogin) => {
    setIsLoading(true);
    try {
      const data = await registerUser(userLogin);

      if (data.user) {
        console.log('User registration was successful');
        dispatch(SET_LOGIN(true));
        dispatch(SET_TOKEN(data.token));
        dispatch(SET_USER(data.user));
        navigate('/dashboard');
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box h='100vh' bg='white' color='gray.500'>
      <Flex justify='space-around' h='93.5vh' align='center'>
        <Box display={['none', 'none', 'flex']}>
          <img src={loginImage} alt='register' height={650} width={650} />
        </Box>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
          }}
          onSubmit={(values) => {
            console.log(values);
            tryRegister(values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <VStack spacing={5} align={['center', 'center', 'flex-start']}>
              <Heading color='purple.500'>Welcome Back</Heading>
              <Form onSubmit={handleSubmit}>
                <FormControl
                  isInvalid={!!errors?.firstName && touched?.firstName}
                  marginBottom='1em'
                >
                  <CustomInput
                    label='First name'
                    w='full'
                    id='firstName'
                    name='firstName'
                    autoComplete='firstName'
                    type='text'
                    variant='filled'
                    placeholder='Enter your first name'
                    validate={(value) => {
                      let error;
                      if (value.length < 3) {
                        error = 'First name too short';
                      }
                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors?.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors?.lastName && touched?.lastName}
                  marginBottom='1em'
                >
                  <CustomInput
                    label='Last name'
                    w='full'
                    id='lastName'
                    name='lastName'
                    autoComplete=' lastName'
                    type='text'
                    variant='filled'
                    placeholder='Enter your last name'
                    validate={(value) => {
                      let error;
                      if (value.length < 3) {
                        error = 'Last name too short';
                      }
                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors?.lastName}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={!!errors.emailAddress && touched.emailAddress}
                  marginBottom='1em'
                >
                  <CustomInput
                    label='Email Address'
                    name='emailAddress'
                    type='text'
                    placeholder='Enter Email address'
                    validate={(value) => {
                      let error;
                      if (value.length < 6) {
                        error = 'Enter a valid email address';
                      }
                      return error;
                    }}
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
                <Button
                  type='submit'
                  colorScheme='purple'
                  w='full'
                  // disabled={pending}
                >
                  {/* {pending ? 'Loading...' : 'LOGIN'} */}
                  LOGIN
                </Button>
              </Form>
              <Box w='full' display='flex' justifyContent='center'>
                Already have an account?
                <Text color='purple' ml={2}>
                  <Link to='/login'>Login</Link>
                </Text>
              </Box>
            </VStack>
          )}
        </Formik>
      </Flex>
    </Box>
  );
};

export default Register;
