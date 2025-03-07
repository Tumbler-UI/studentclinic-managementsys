import React, { useState } from "react";
import { Button, TextField, Paper } from "@mui/material";
import Layout from "./Layout";

const Appointments = () => {
  const [studentName, setStudentName] = useState("");
  const [date, setDate] = useState("");

  const handleSchedule = () => {
    alert(`Appointment scheduled for ${studentName} on ${date}`);
  };

  return (
    <Layout>
      <h2>Schedule Appointment</h2>
      <Paper style={{ padding: "20px" }}>
        <TextField
          label="Student Name"
          fullWidth
          variant="outlined"
          onChange={(e) => setStudentName(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          type="date"
          fullWidth
          variant="outlined"
          onChange={(e) => setDate(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Button variant="contained" color="primary" onClick={handleSchedule}>
          Schedule
        </Button>
      </Paper>
    </Layout>
  );
};

export default Appointments;
