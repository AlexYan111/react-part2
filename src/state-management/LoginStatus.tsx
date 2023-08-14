import { useContext, useReducer, useState } from "react";
import LoginContext from "./contexts/loginContext";
import loginStatusReducer from "./reducers/loginStatusReducer";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const { user, dispatch } = useContext(LoginContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "Allen" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
