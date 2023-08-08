import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [userName, setUserName] = useState(null);

  const [token, setToken] = useState(null);

  async function login(userName, password) {
    setAuthenticated(true);
    setUserName(userName);
    return true;
          /*
    try {
      const response = await executeJwtAuthenticationService(
        userName,
        password
      );
      if (response.status == 200) {
        const jwtToken = "Bearer " + response.data.token;
        setAuthenticated(true);
        setUserName(userName);
        setToken(jwtToken);
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = jwtToken;
          return config;
        });
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }*/
  }

  function logout() {
    setAuthenticated(false);
    setUserName(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, userName, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
