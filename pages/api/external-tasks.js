const getTasksFromOtherApi = async (req, res) => {
  const tasks = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (data) => data.json()
  );
  res.status(200).json(tasks);
};

export default getTasksFromOtherApi;
