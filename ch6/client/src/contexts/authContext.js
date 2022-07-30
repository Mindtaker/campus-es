import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { getUser } from "../services/UserService";

const MY_AUTH_APP = "MY_AUTH_APP";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(MY_AUTH_APP) ?? false
  );
  const [user, setUser] = useState(null);

  const login = useCallback((email, password) => {
    getUser(email, password)
      .then((data) => {
        if (!data["error"]) {
          localStorage.setItem(MY_AUTH_APP, true);
          setIsAuthenticated(true);
          setUser({ id: data._id, name: data.name, email: data.email });
        } else {
          window.alert(`Error ${data.error}, ${data.message}`);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      user,
    }),
    [login, logout, isAuthenticated, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}
