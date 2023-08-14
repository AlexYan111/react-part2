import { ReactNode, useReducer } from "react";
import LoginContext from "./loginContext";

interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const loginStatusReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") {
    return action.username;
  }
  if (action.type === "LOGOUT") {
    return "";
  }
  return state;
};

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
