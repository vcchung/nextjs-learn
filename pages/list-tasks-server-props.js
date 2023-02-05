import Tasks from "../components/Tasks";

const ListTasksServerProps = ({ tasks }) => {
  return (
    <>
      <h1>This is list tasks page using server side props!</h1>
      <Tasks tasks={tasks} />
    </>
  );
};

export async function getServerSideProps(context) {
  const tasks = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (data) => data.json()
  );
  return {
    props: {
      tasks: tasks,
    },
  };
}
export default ListTasksServerProps;
