import React, { ReactNode, useReducer } from "react";
import LoginContext from "./contexts/loginContext";
import loginStatusReducer from "./reducers/loginStatusReducer";

interface Props {
  children: ReactNode;
}

const LoginProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginStatusReducer, "");

  return (
    <LoginContext.Provider value={{ user, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
