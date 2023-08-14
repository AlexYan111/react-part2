export interface Task {
  id: number;
  title: string;
}

interface AddTaskAction {
  type: "ADD";
  task: Task; // payload
}

interface DeleteTaskAction {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTaskAction | DeleteTaskAction;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((task) => task.id !== action.taskId);
  }
};

export default taskReducer;
