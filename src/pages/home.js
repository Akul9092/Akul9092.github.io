import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <Box display = 'flex' alignItems='center' justifyContent='center' sx = {{height: '95dvh', backgroundColor: 'secondary.main'}}>
            <Typography variant='h1' sx = {{color: 'primary.main'}}>
                Welcome to my Website
            </Typography>
        </Box>

    );
}

export default Home;