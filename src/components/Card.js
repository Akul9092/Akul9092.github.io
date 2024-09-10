import React from "react";
import { Box } from "@mui/material";

const Card = ({ children, double = false }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{
        height: '100%',
        width: double ? '45%' : '22.5%',
        border: '5px solid',
        borderColor: 'primary.main',
        color: 'text.main',
        borderRadius: 8,
        transition: 'transform 0.2s, background-color 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: 'primary.main',
          color: 'secondary.main'
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
