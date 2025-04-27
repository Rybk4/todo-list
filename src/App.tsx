import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useState, useRef } from "react";

const TasksList = [
  { id: 1, title: "Task 1", description: "Description 1", status: "to-do" },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "in-progress",
  },
  { id: 3, title: "Task 3", description: "Description 3", status: "to-do" },
  { id: 4, title: "Task 4", description: "Description 4", status: "to-do" },
  {
    id: 5,
    title: "Task 5",
    description: "Description 5",
    status: "in-progress",
  },
  { id: 6, title: "Task 6", description: "Description 6", status: "done" },
  { id: 7, title: "Task 7", description: "Description 7", status: "done" },
];

function App() {
  const [tasks, setTasks] = useState(TasksList);
  const newTask = useRef({
    id: 0,
    title: "",
    description: "",
    status: "",
  });
  document
    .getElementById("addtask")
    ?.addEventListener("submit", function (event) {
      event.preventDefault();
    });

  function addTask() {
    const copy = [...tasks];
    newTask.current.status="to-do"
    newTask.current.id =tasks.length + 1
    copy.push(newTask.current);
    setTasks(copy);
    console.log(newTask.current)
  }

  function nextStatus(id: number, status: string) {
    const copyTasks = [...tasks];
    const task = copyTasks.find((item) => item.id == id);
    if (task) {
      task.status = status;
      setTasks(copyTasks);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl text-black  pb-10">TodoList by Rybka</h1>
        <div className="flex flex-row">
          <div className="bg-green-600 w-xl">
            <h1 className="text-3xl p-3">To do</h1>
            {tasks
              .filter((item) => item.status == "to-do")
              .map((task) => (
                <Task
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  next={() => nextStatus(task.id, "in-progress")}
                />
              ))}
            <AddTask add={addTask} ref={newTask.current} />
          </div>
          <div className="bg-blue-600 w-xl">
            <h1 className="text-3xl p-3">In progress</h1>
            {tasks
              .filter((item) => item.status == "in-progress")
              .map((task) => (
                <Task
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  next={() => nextStatus(task.id, "done")}
                />
              ))}
          </div>
          <div className="bg-red-600 w-xl">
            <h1 className="text-3xl p-3">Done</h1>
            {tasks
              .filter((item) => item.status == "done")
              .map((task) => (
                <Task
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  next={() => nextStatus(task.id, "to-do")}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
