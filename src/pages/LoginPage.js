import { AuthForm } from 'components';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import {selectError} from 'redux/auth/authSelector'
import { resetError } from 'redux/auth/authSlice';

import { useEffect } from 'react';

const optionsLoginForm = [
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
  email: '',
  password: '',
  error:null,
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleLoginUser = data => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    dispatch(resetError()); // Сброс значения error при монтировании компонента
  }, [dispatch]);

  return (
    <>
    <AuthForm
      onSubmit={handleLoginUser}
      submitTitle="Login"
      options={optionsLoginForm}
      initialState={initialState}
    />
    {error && <div style={{ color: 'red',textAlign:'center', fontSize: 40,}}>Error: {error}</div>}
    </>
  );
};

export default LoginPage;
