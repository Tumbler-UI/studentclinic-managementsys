import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Layout from "./Layout";
import "../stylesheets/Dashboard.css";

const Dashboard = () => {
  const sections = [
    { title: "Total Students", value: "350" },
    { title: "Recent Diagnoses", value: "15 cases" },
    { title: "Available Medication", value: "20 types" },
    { title: "Pending Reports", value: "8 records" },
  ];

  return (
    <Layout>
      <Typography variant="h4" gutterBottom className="dashboard-title">
        Admin Dashboard
      </Typography>
      <Grid container spacing={3} className="dashboard-grid">
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} className="dashboard-card">
            <Card className="card">
              <CardContent>
                <Typography variant="h6" className="card-title">
                  {section.title}
                </Typography>
                <Typography variant="h4" className="card-value">
                  {section.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Dashboard;
