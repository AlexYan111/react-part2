import { useReducer, Dispatch } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import LoginContext from "./state-management/contexts/loginContext";
import TasksContext from "./state-management/contexts/tasksContext";
import Counter from "./state-management/Counter";
import HomePage from "./state-management/HomePage";
import LoginProvider from "./state-management/LoginProvider";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import loginStatusReducer from "./state-management/reducers/loginStatusReducer";
import taskReducer from "./state-management/reducers/tasksReducer";
import TaskList from "./state-management/TaskList";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <>
      <LoginProvider>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </LoginProvider>
    </>
  );
}

export default App;
