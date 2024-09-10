import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '../components/Card';
import CurrentlyPlaying from '../components/currently';
import cornellLogo from '/Users/akulmaheshwari/Downloads/website/src/assets/Cornell Logo.png';
import yosemite from '/Users/akulmaheshwari/Downloads/website/src/assets/Yosemite.JPG';
import wordCloud from '/Users/akulmaheshwari/Downloads/website/src/assets/Word Cloud.png';
import Conquer from '/Users/akulmaheshwari/Downloads/website/src/assets/Conquer.jpg';
import Police from '/Users/akulmaheshwari/Downloads/website/src/assets/Police.jpeg';
import Family from '/Users/akulmaheshwari/Downloads/website/src/assets/Family.JPG';

const About = () => {

    const singapore = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png';

    return (
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ backgroundColor: 'secondary.main', height: '95dvh', padding: 2 }}
      >
        <Box display = 'flex' justifyContent='center' width = '20%' sx = {{border: '0px solid', borderColor: 'primary.main', borderRadius: 4}}>
            <Typography variant='h3'>
                About Me
            </Typography>
        </Box>
        <Box
        display='flex'
        justifyContent='space-evenly'
          sx={{
            width: '100%',
            height: '40%',
          }}
        >
            <Card >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%', width: '100%'
                }}>
                    <Box
                        component="img"
                        src={Family}
                        alt="Profile Photo taken in Yosemite"
                        sx={{ maxHeight: '95%', maxWidth: '100%', height: 'auto', width: 'auto', margin: 1, borderRadius: 8 }}
                    />
                </Box>
            </Card>
            <Card>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%', width: '100%', 
                color: 'text.main',         
                '&:hover': {
                    color: 'secondary.main',
                  },
            }}>
                <Box
                    component="img"
                    src={cornellLogo}
                    alt="Cornell Logo"
                    sx={{ maxHeight: '70%', maxWidth: '70%', height: 'auto', width: 'auto', marginBottom: 2 }}
                />
                <Typography variant="body2" component="div">
                    BS. Computer Science
                </Typography>
                <Typography variant="body2" component="div">
                    (Aug 2023 - May 2026)
                </Typography>
                </Box>
            </Card>
            <Card double>
                <Box
                    component="img"
                    src={Police}
                    alt="National Service"
                    sx={{ maxHeight: '100%', maxWidth: '100%', height: 'auto', width: 'auto', margin: 1, borderRadius: 8 }}
                />
            </Card>
        </Box>
        <Box
        display='flex'
        justifyContent='space-evenly'
          sx={{
            width: '100%',
            height: '40%',
          }}
        >
            <Card>
                <Box
                    component="img"
                    src={singapore}
                    alt="Singapore Flag"
                    sx={{ maxHeight: '70%', maxWidth: '70%', height: 'auto', width: 'auto', marginBottom: 2 }}
                />
            </Card>
            <Card double>
                <Box
                    component="img"
                    src={wordCloud}
                    alt="Interests Word Cloud"
                    sx={{ maxHeight: '80%', maxWidth: '90%', height: 'auto', width: 'auto', marginBottom: 2 }}
                    />
            </Card>
            <Card>
                <Box
                    component="img"
                    src={Conquer}
                    alt="Favourite Quote"
                    sx={{ maxHeight: '80%', maxWidth: '100%', height: 'auto', width: 'auto', margin: 1, borderRadius: 8 }}
                />
            </Card>

        </Box>
      </Box>
    );
}

export default About;