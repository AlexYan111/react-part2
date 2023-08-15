import "./App.css";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import LoginProvider from "./state-management/login/LoginProvider";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      <LoginProvider>
        <TasksProvider>
          <Counter />
          <NavBar />
          <HomePage />
        </TasksProvider>
      </LoginProvider>
    </>
  );
}

export default App;
