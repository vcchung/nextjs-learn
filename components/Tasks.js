function Tasks({ tasks }) {
  return (
    tasks &&
    tasks.map((task) => (
      <>
        <div>id:{task.id}</div>
        <div>title:{task.title}</div>
      </>
    ))
  );
}

export default Tasks;
