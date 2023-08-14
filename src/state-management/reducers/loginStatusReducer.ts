interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type Action = LoginAction | LogoutAction;

const loginStatusReducer = (state: string, action: Action): string => {
  if (action.type === "LOGIN") {
    return action.username;
  }
  if (action.type === "LOGOUT") {
    return "";
  }
  return state;
};

export default loginStatusReducer;
