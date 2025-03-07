import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Layout from "./Layout";

const diagnosisData = [
  { student: "John Doe", date: "2025-03-01", diagnosis: "Flu", doctor: "Dr. Smith" },
  { student: "Mary Jane", date: "2025-02-28", diagnosis: "Allergy", doctor: "Dr. Adams" },
];

const DiagnosisHistory = () => {
  return (
    <Layout>
      <h2>Diagnosis History</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Diagnosis</TableCell>
              <TableCell>Doctor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {diagnosisData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.student}</TableCell>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.diagnosis}</TableCell>
                <TableCell>{entry.doctor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default DiagnosisHistory;
