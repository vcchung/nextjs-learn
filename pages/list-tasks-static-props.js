import Tasks from "../components/Tasks";

const ListTasksStaticProps = ({ tasks }) => {
  return (
    <>
      <h1>This is list tasks page using static props!</h1>
      <Tasks tasks={tasks} />
    </>
  );
};

export async function getStaticProps(context) {
  const tasks = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (data) => data.json()
  );
  return {
    props: {
      tasks: tasks,
    },
  };
}
export default ListTasksStaticProps;
