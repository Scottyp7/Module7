import { useContext } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { MyThemeContext } from './MyThemeProvider';
import { Box, Typography, MenuItem, Toolbar, AppBar, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import {Menu} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import './App.css'

export default function NavBar() {
    const { theme } = useContext(MyThemeContext);
    const [OpenDrawer, SetDrawer] = useState(false)

        const menuItems = [
            {"text": "Home", "path":"/"},
            {"text": "Dashboard", "path":"/dash"},
            {"text": "About", "path":"/about"},
            {"text": "Rates", "path":"/Rates"},
            {"text": "Posts", "path":"/posts"}
        ]

        function handleDrawerToggle()
        {
            SetDrawer(!OpenDrawer)
        }

    return (
    <>
            <Box>
                  <AppBar>
               <Toolbar>
                    <IconButton edge="start" onClick={handleDrawerToggle} color="inherit" aria-label='menu' sx={{marginRight: 2}}>
                        <MailIcon></MailIcon><SendIcon></SendIcon>
                    </IconButton>
                    <Typography variant='h6' component="div" sx={{flexGrow: 0.2}}>Bitcoin Rates</Typography>
                    <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'flex-end'}}>
                        {menuItems.map((item)=> (
                            <MenuItem component={NavLink} to={item.path} key={item.text}>
                                {item.text}
                            </MenuItem>
                        ))}
                    </Box>
               </Toolbar>
            </AppBar>
        </Box>
        <Drawer anchor="left" open={OpenDrawer} onClose={handleDrawerToggle} sx={{width: 240}}>
            <List sx={{width: 240}}>
                {menuItems.map((item)=> (
                    <ListItem key={item.text} component={NavLink} to={item.path}>
                        <ListItemText primary={item.text}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Drawer>


    </>
    )
}       






{/*              <nav className="NavBar"
            style={{ backgroundColor: theme.background, color: theme.foreground }}>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dash">Dashboard</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/Rates">Rates</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
            </ul> 
            </nav>{/* ++ Add another page with route and component 
        </nav> */}