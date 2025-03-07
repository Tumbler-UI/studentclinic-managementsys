import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PrintIcon from "@mui/icons-material/Print";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" } }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <DashboardIcon style={{ marginRight: 10 }} />
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/students">
            <PeopleIcon style={{ marginRight: 10 }} />
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button component={Link} to="/medical-records">
            <MedicalServicesIcon style={{ marginRight: 10 }} />
            <ListItemText primary="Medical Records" />
          </ListItem>
          <ListItem button component={Link} to="/print-records">
            <PrintIcon style={{ marginRight: 10 }} />
            <ListItemText primary="Print Records" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={{ flexGrow: 1, marginLeft: drawerWidth }}>
        {/* Top Navbar */}
        <AppBar position="static" sx={{ backgroundColor: "#1565c0" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 , paddingLeft: "20px"}}>
              🏫 THIGIO SECONDARY Students Clinic System
            </Typography>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
