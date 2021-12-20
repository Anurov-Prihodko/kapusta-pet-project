const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUserToken = state => state.auth.user.token;
const getIsChecksCurrentUser = state => state.auth.isChecksCurrentUser;
const getBalance = state => state.auth.user.balance;
const getBalanceHasBeenSet = state => state.auth.user.balanceHasBeenSet;

export { getIsLoggedIn, getUserEmail, getUserToken, getIsChecksCurrentUser, getBalance, getBalanceHasBeenSet };
