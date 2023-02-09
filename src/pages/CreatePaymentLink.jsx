import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import {
  Box,
  Heading,
  FormControl,
  FormErrorMessage,
  Button,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import CustomInput from '../components/CustomInput';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSlice';

const CreatePaymentLink = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  const logintoken = localStorage.getItem('token');
  console.log(isLogin);
  console.log(logintoken);
  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, []);
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
            <Heading borderBottomWidth='1px' fontSize={18} marginBottom={5}>
              Create Payment Link
            </Heading>
            <Formik
              initialValues={{
                fullName: '',
                amount: '',
                emailAddress: '',
                description: '',
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <Box spacing={9} align={['center', 'center', 'flex-start']}>
                  <Form onSubmit={handleSubmit}>
                    <SimpleGrid columns={2} spacing={10}>
                      <GridItem colSpan={1}>
                        <FormControl
                          isInvalid={!!errors.email && touched.email}
                          marginBottom='1em'
                        >
                          <CustomInput
                            label='Full Name'
                            name='fullName'
                            type='text'
                            placeholder='Full Name'
                            w='100%'
                            validate={(value) => {
                              let error;
                              if (value.length < 6) {
                                error = 'Full Name';
                              }
                              return error;
                            }}
                          />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormControl
                          isInvalid={
                            !!errors.emailAddress && touched.emailAddress
                          }
                          marginBottom='1em'
                        >
                          <CustomInput
                            label='Email Address'
                            name='emailAddress'
                            type='text'
                            placeholder='Payee Email Address'
                            w='100%'
                            validate={(value) => {
                              let error;
                              if (value.length < 6) {
                                error = ' Email Address';
                              }
                              return error;
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    </SimpleGrid>
                    <SimpleGrid columns={2} spacing={10}>
                      <GridItem colSpan={1}>
                        <FormControl
                          isInvalid={!!errors.amount && touched.amount}
                          marginBottom='1em'
                        >
                          <CustomInput
                            label='Amount'
                            name='amount'
                            type='text'
                            placeholder='Enter Amount'
                            w='100%'
                          />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormControl
                          isInvalid={
                            !!errors.description && touched.description
                          }
                          marginBottom='1em'
                        >
                          <CustomInput
                            label='Payment Description'
                            name='description'
                            type='text'
                            placeholder='Payment Description'
                            w='100%'
                            validate={(value) => {
                              let error;
                              if (value.length < 6) {
                                error =
                                  'Password must contain at least 6 characters';
                              }
                              return error;
                            }}
                          />
                          <FormErrorMessage>
                            {errors.description}
                          </FormErrorMessage>
                        </FormControl>
                      </GridItem>
                    </SimpleGrid>
                    <Button
                      type='submit'
                      colorScheme='purple'
                      w='full'
                      // disabled={pending}
                    >
                      Create
                    </Button>
                  </Form>
                </Box>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreatePaymentLink;
