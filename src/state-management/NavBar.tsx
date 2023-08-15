import { useContext } from "react";
import TasksContext from "./tasks/tasksContext";
import LoginStatus from "./login/LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const counter = useCounterStore((s) => s.counter); // use selector to get the counter value, so now only when counter changes, this component will re-render

  console.log("NavBar rendered");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
