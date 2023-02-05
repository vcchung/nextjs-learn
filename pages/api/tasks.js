const getTasks = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "something else",
    },
    {
      id: 2,
      title: "something else again",
    },
  ]);
};

export default getTasks;
