import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParam } from 'react-use';
import { loginUserViaGoogle } from '../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const useGoogleAuthLogin = () => {
  const { pathname } = useLocation();
  const access_token = useSearchParam('access_token');
  const email = useSearchParam('email');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname === '/api/users/google-redirect/') {
      dispatch(
        loginUserViaGoogle({
          token: access_token,
          email,
        }),
      );
      navigate('/');
    }
  }, [access_token, email, pathname, dispatch, navigate]);
};

export default useGoogleAuthLogin;
