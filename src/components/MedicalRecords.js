import React, { useRef } from "react";
import { Button, Paper, Typography } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import Layout from "./Layout";

const MedicalRecords = () => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Medical Records
      </Typography>
      <Paper ref={printRef} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Student Name: John Doe</Typography>
        <Typography variant="body1">Age: 18</Typography>
        <Typography variant="body1">Diagnosis: Flu</Typography>
        <Typography variant="body1">Prescribed Medication: Paracetamol</Typography>
      </Paper>
      <Button variant="contained" color="primary" onClick={handlePrint}>
        Print Records
      </Button>
    </Layout>
  );
};

export default MedicalRecords;
