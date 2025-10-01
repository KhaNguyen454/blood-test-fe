// Utility functions for authentication
export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};

// Demo function to simulate login
export const demoLogin = () => {
  setAuthToken('demo-token-123');
  window.location.reload(); // Reload to update login status
};

// Demo function to simulate logout
export const demoLogout = () => {
  removeAuthToken();
  window.location.reload(); // Reload to update login status
};
