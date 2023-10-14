import { useState } from "react";
import TextField from "@mui/material/TextField";

const AddTaskForm = ({ onAddTask }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description && name) {
      onAddTask(description);
      onAddTask(name);
      setDescription("");
      setName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        color: "#000",
        gap: "10px",
      }}
    >
      <h2>New Task</h2>
      <TextField
        id="outlined-textarea"
        label="Add Name"
        placeholder="Name"
        multiline
        value={name}
        onChange={handleNameChange}
        sx={{ border: 1, borderRadius: "7px", borderColor: "#000" }}
      />
      <TextField
        id="outlined-textarea"
        label="Add Description"
        placeholder="Description"
        multiline
        value={description}
        onChange={handleDescriptionChange}
        sx={{ border: 1, borderRadius: "7px", borderColor: "#000" }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
