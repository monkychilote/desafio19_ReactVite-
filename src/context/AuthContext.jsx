import { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
