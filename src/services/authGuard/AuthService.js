// AuthService.js
const AuthService = {
    isAuthenticated: async () => {
      const token = localStorage.getItem('token');
      return !!token;
    },
  };
  
  export default AuthService;
  