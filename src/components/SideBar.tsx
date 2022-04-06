import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ListItemText from "@mui/material/ListItemText";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import {Link} from "react-router-dom";

export const SideBar = () => {
    const drawerWidth = 240;
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
                backgroundColor: '#2A3042'
            }}
        >
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
                <List>
                    <Link to='/profile' style={{textDecoration: "none"}}>
                        <ListItem button>
                            <ListItemIcon><AssignmentIndOutlinedIcon/></ListItemIcon>
                            <ListItemText primary='Profile' sx={{color: 'rgba(0, 0, 0, 0.87)'}}/>
                        </ListItem>
                    </Link>
                    <Link to='/message' style={{textDecoration: "none"}}>
                        <ListItem button>
                            <ListItemIcon><ChatOutlinedIcon/></ListItemIcon>
                            <ListItemText primary='Chat' sx={{color: 'rgba(0, 0, 0, 0.87)'}}/>
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Drawer>
    );
};