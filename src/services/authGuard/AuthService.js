// AuthService.js
const AuthService = {
  isAuthenticated: async () => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };

    const token = getCookie('token');
    return !!token;
  },
};

export default AuthService;
