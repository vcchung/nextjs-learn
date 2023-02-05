function Tasks({ tasks }) {
  const body =
    tasks &&
    tasks.map((task) => {
      return (
        <tr key={task.id} className="border-gray-700 ">
          <td>{task.id}</td>
          <td>{task.title}</td>
        </tr>
      );
    });
  return (
    <table className="table-fixed px-10 m-10 text-justify border-gray-700 ">
      <thead className="border-gray-700 ">
        <tr>
          <th>id</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}

export default Tasks;
