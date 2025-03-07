import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Layout from "./Layout";

const medicationData = [
  { name: "Paracetamol", quantity: 100, expiry: "2025-12-01" },
  { name: "Ibuprofen", quantity: 50, expiry: "2026-05-10" },
];

const Medication = () => {
  return (
    <Layout>
      <h2>Available Medication</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Medicine</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Expiry Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicationData.map((med, index) => (
              <TableRow key={index}>
                <TableCell>{med.name}</TableCell>
                <TableCell>{med.quantity}</TableCell>
                <TableCell>{med.expiry}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Medication;
