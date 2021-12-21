const getUserEmail = state => state.auth.user.email;
const getUserToken = state => state.auth.token;
const getUserBalance = state => state.auth.user.balance;
const getBalanceHasBeenSet = state => state.auth.user.balanceHasBeenSet;

export { getUserEmail, getUserToken, getUserBalance, getBalanceHasBeenSet };
