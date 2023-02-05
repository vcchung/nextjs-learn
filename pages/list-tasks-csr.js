import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";

//Client side rendering using useEffect
const ListTasksCsr = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <>
      <h1>This is list tasks page Client Side Rendering using useEffect!</h1>
      <Tasks tasks={tasks} />
    </>
  );
};

export default ListTasksCsr;
