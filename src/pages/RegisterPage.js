import { AuthForm } from 'components';

import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import {selectError} from 'redux/auth/authSelector'
import { resetError } from 'redux/auth/authSlice';
import { useEffect } from 'react';
const optionsRegisterForm = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    placeholder: 'Enter your name',
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email',
  },
  {
    label: 'Password',
    type: 'text',
    name: 'password',
    placeholder: 'Enter your password more then 8 characters',
  },
];

const initialState = {
  name: '',
  email: '',
  password: '',
  error:'',
};


const RegisterPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(resetError()); // Сброс значения error при монтировании компонента
  }, [dispatch]);

  const handleRegisterUser = data => {
    dispatch(registerUser(data));
  };
  console.log("error======", error);
  return (
     <>
    <AuthForm
      onSubmit={handleRegisterUser}
      submitTitle="Register"
      options={optionsRegisterForm}
      initialState={initialState}
      
    />
    {error && <div style={{ color: 'red',textAlign:'center', fontSize: 40,}}>Error: {error}</div>}
   </>
  );
};

export default RegisterPage;
