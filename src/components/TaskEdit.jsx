import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#000",
  gap: "10px",
  display: "flex",
  flexDirection: "column",
};

const TaskEdit = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValue, setFormValue] = useState(data);

  const onChange = (e) => {
    setFormValue({ ...formValue, description: e.target.value });
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          border: 1,
          borderRadius: "7px",
          borderColor: "#000",
          color: "#000",
        }}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4">
            Edit Task
          </Typography>

          <TextField
            fullWidth
            id="input-description"
            label="Name"
            variant="outlined"
          />

          <TextField
            id="input-description"
            label="Description"
            variant="outlined"
            value={formValue?.description}
            onChange={onChange}
            fullWidth
          />
          <FormGroup fullWidth>
            <FormControlLabel
              checked={formValue?.isComplete}
              control={<Checkbox />}
              label="State"
            />
          </FormGroup>
        </Box>
      </Modal>
    </div>
  );
};
export default TaskEdit;
