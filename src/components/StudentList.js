import React, { useState } from "react";
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Layout from "./Layout";

const studentsData = [
  { id: 1, name: "John Doe", age: 18, class: "12A" },
  { id: 2, name: "Mary Jane", age: 17, class: "11B" },
  { id: 3, name: "David Smith", age: 16, class: "10C" },
];

const StudentList = () => {
  const [search, setSearch] = useState("");

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h2>Student List</h2>
      <TextField
        label="Search Student"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.class}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default StudentList;
