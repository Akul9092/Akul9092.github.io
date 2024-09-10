import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
 
const Navbar = () => {

    const email = 'am2737@cornell.edu';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`
      };
    
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: 'primary.main', height: '5dvh', width: '100%'}}>
            <Box display="flex" alignItems="center" justifyContent='space-evenly' sx={{ m: 2, width: '30%'}}>
                <Typography variant = 'body1' sx = {{color: 'secondary.main'}}>Akul Maheshwari</Typography>
                <NavLink to="/about" activeStyle={{ textDecoration: 'underline' }}>
                    <Button sx={{color: 'secondary.main'}}>About Me</Button>
                </NavLink>
                <NavLink to="/resume" activeStyle={{ textDecoration: 'underline' }}>
                    <Button sx = {{color: 'secondary.main'}}>Portfolio</Button>
                </NavLink>
            </Box>
            <Box display="flex" alignItems="center" justifyContent='space-evenly' sx = {{width: '15%', m: 2}}>
                <Button onClick={handleEmailClick}>
                    <Box component='img' src={require('../assets/Mail Icon.png')}
                    sx={{ width: 30,         
                        '&:hover': {
                            transform: 'scale(1.2)',
                        }, }} />
                </Button>

                <a href="https://www.linkedin.com/in/akul-maheshwari/" target="_blank" rel="noopener noreferrer">
                    <Button>
                        <Box component="img" src={require('../assets/Black Linkedin Icon.png')}
                        sx={{ width: 30,         
                            '&:hover': {
                                transform: 'scale(1.2)',
                            }, }} />
                    </Button>
                </a>
                <a href="https://github.com/Akul9092" target="_blank" rel="noopener noreferrer">
                    <Button>
                        <Box component="img" src={require('../assets/Github Icon.png')}
                        sx={{ width: 30,         
                            '&:hover': {
                                transform: 'scale(1.2)',
                            }, }}  />
                    </Button>
                </a>
            </Box>
        </Box>
    );
};
 
export default Navbar;