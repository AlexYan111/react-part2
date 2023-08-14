import "./App.css";
import HomePage from "./state-management/HomePage";
import LoginProvider from "./state-management/LoginProvider";
import NavBar from "./state-management/NavBar";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <>
      <LoginProvider>
        <TasksProvider>
          <NavBar />
          <HomePage />
        </TasksProvider>
      </LoginProvider>
    </>
  );
}

export default App;
