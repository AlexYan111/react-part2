import { useContext } from "react";
import LoginContext from "../contexts/loginContext";

const useLogin = () => useContext(LoginContext);

export default useLogin;
