import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Home } from "@mui/icons-material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PostAddIcon from "@mui/icons-material/PostAdd";
import "./styles.css";

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-heading">procured.</div>
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List component="nav">
          <div className="dashboard">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <Home sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </div>
          <Divider />
          <div className="sidebar-items">
            <div className="center">Management</div>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <TextSnippetIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="My Projects" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <PostAddIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Start Project" />
            </ListItemButton>
          </div>
        </List>
      </Box>
    </div>
  );
}
