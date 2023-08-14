import useLogin from "./useLogin";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const { user, dispatch } = useLogin();

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
