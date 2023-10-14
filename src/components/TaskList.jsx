import Task from "./Task";

const data = [
  {
    id: 0,
    description: "Hacer cafe",
    isCompleted: false,
    name: "Tarea 1",
  },
  {
    id: 1,
    description: "Jugar",
    isCompleted: true,
    name: "Tarea 2",
  },
];

const TaskList = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {data.map((itemData) => (
        <Task key={itemData.id} data={itemData} />
      ))}
    </div>
  );
};

export default TaskList;
