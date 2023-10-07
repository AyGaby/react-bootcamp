import Task from "./organisms/Task";

const data = [
  {
    id: 0,
    description: "Descargar el proyecto",
    isCompleted: false,
    name: "Tarea 1",
  },
  {
    id: 1,
    description: "Comprender el ejercico",
    isCompleted: true,
    name: "Tarea 2",
  },
];

const TaskList = () => {
  return (
    <>
      {data.map((itemData) => (
        <Task key={itemData.id} data={itemData} />
      ))}
    </>
  );
};

export default TaskList;
