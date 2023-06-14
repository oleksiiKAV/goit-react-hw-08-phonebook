import { ContactPage, LoginPage, MainLayout, RegisterPage } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/authOperations';
import { selectIsAuth } from 'redux/auth/authSelector';

// aweewrwe@ewrwerea.com 123456789

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/contacts" />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
