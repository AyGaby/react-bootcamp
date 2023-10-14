import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import Filter from "./components/Filter";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        height: "100vh",
        padding: "1rem",
      }}
    >
      <Box component="div">
        <Typography>Tasks List</Typography>
        <TaskList />
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "10px",
          borderRadius: "7px",
          backgroundColor: "#fff",
          height: "fit-content",
          alignSelf: "flex-end",
        }}
      >
        <Filter />
        <AddTaskForm />
      </Box>
    </div>
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
