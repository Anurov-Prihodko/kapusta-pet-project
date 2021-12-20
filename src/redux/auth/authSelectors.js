const getUserEmail = state => state.auth.user.email;
const getUserToken = state => state.auth.token;
const getBalance = state => state.auth.user.balance;
const getBalanceHasBeenSet = state => state.auth.user.balanceHasBeenSet;

export { getUserEmail, getUserToken, getBalance, getBalanceHasBeenSet };
