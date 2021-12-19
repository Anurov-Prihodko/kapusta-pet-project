const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUserToken = state => state.auth.user.token;
const getIsChecksCurrentUser = state => state.auth.isChecksCurrentUser;

export { getIsLoggedIn, getUserEmail, getUserToken, getIsChecksCurrentUser };
