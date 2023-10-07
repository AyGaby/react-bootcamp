import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  return (
    <>
      <TaskList />
      <AddTaskForm />
    </>
  );
}

export default App;

// ejemplo de estructura

// import React from 'react';
// import { TaskProvider } from './context/TaskContext.jsx';
// import TaskList from './components/TaskList.jsx';
// import AddTaskForm from './components/AddTaskForm.jsx';
// import Filter from './components/Filter.jsx';

// const App = () => {
//   return (
//     <TaskProvider>
//       <AddTaskForm />
//       <Filter />
//       <TaskList />
//     </TaskProvider>
//   );
// };

// export default App;
