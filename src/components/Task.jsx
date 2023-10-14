import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";

import TaskEdit from "./TaskEdit";
import TaskRemove from "./TaskRemove";
/* eslint-disable react/prop-types */
const Task = ({ data }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.description}
          </Typography>
          <Typography>
            {data?.isCompleted ? "Completa" : "Incompleta"}
          </Typography>
        </CardContent>
        <CardActions>
          <TaskEdit />
          <TaskRemove />
        </CardActions>
      </Card>
    </Box>
  );
};

export default Task;
