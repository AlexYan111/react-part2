import React, { Dispatch } from "react";
import { AuthAction } from "./LoginProvider";

interface LoginContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const LoginContext = React.createContext<LoginContextType>(
  {} as LoginContextType
);

export default LoginContext;
