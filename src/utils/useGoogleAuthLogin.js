import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParam } from 'react-use';
import { loginUserViaGoogle } from '../redux/auth/authOperations';
import { createBrowserHistory } from 'history';

const useGoogleAuthLogin = () => {
  const { pathname } = useLocation();
  const access_token = useSearchParam('access_token');
  const email = useSearchParam('email');
  const history = createBrowserHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname === '/api/users/google-redirect/') {
      dispatch(
        loginUserViaGoogle({
          token: access_token,
          email,
        }),
      );
      history.push('/');
    }
  }, [access_token, email, pathname, dispatch, history]);
};

export default useGoogleAuthLogin;
