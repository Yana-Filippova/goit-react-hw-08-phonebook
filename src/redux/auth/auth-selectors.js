export const getIsAuthenticated = state => state.auth.isAuthenticated;
export const getUserName = state => state.auth.user.name;
export const getLoading = state => state.auth.isLoading;
export const getError = state => state.auth.error;
