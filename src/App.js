import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import PaymentLinks from './pages/PaymentLinks';
import CreatePaymentLink from './pages/CreatePaymentLink';
import Register from './pages/Register';
import Users from './pages/Users';

function App() {
  // 👇️ with React router
  const location = useLocation();

  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);
  return (
    <div>
      <ChakraProvider>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/paymentlinks' element={<PaymentLinks />} />
          <Route path='/users' element={<Users />} />
          <Route path='/create-payment-link' element={<CreatePaymentLink />} />
          <Route path='/payment-link' element={<Dashboard />} />
          <Route path='/view-cashout' element={<Dashboard />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
