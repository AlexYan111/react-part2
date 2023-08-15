import useLoginStore from "./store";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  // const { user, dispatch } = useLogin();

  const { username, login, logout } = useLoginStore();

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("Allen")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
