import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import Card from '../components/Card';
import OrderManagement from '/Users/akulmaheshwari/Downloads/website/src/assets/Order Management.gif';
import IMA from '/Users/akulmaheshwari/Downloads/website/src/assets/IMA.gif';
import Website from '/Users/akulmaheshwari/Downloads/website/src/assets/Website.png';

const Resume = () => {

    const redirectToLink = (hyperlink) => {
        window.open(hyperlink, '_blank');
    };

    return (
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: 'secondary.main', minHeight: '95dvh', padding: 2 }}
        >
            <Box
                display='flex'
                justifyContent='center'
                width='100%'
                sx={{ border: '0px solid', borderColor: 'primary.main', borderRadius: 4, marginBottom: 6 }}
            >
                <Typography variant='h3'>
                My Projects
                </Typography>
            </Box>
            <Box
            display='flex'
            justifyContent='space-evenly'
            sx={{
                width: '100%',
                height: '40dvh',
            }}
            >
                <Card >
                    <ButtonBase onClick = {()=>redirectToLink('https://github.com/Akul9092/order-management')} sx = {{height: '100%', width: '100%'}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', height: '100%', width: '100%'
                        }}>
                            <Box component='img' src = {OrderManagement} sx = {{height: '30%'}}/>
                            <Typography variant = 'h5'>
                                Order Management
                            </Typography>
                            <Typography variant = 'body2' sx = {{width: '80%'}}>
                                My mother is a baker and I noticed that she struggled with managing her orders. 
                                As such, I developed a system where a user can input orders, which have dates and other essential details, 
                                and reminds the user accordingly.
                            </Typography>
                            <Typography variant = 'body2'>
                                Tech Stack: Java, PHP, mySQL
                            </Typography>
                        </Box>
                    </ButtonBase>
                </Card>
                <Card >
                    <ButtonBase onClick = {()=>redirectToLink('https://github.com/Akul9092/vocabulary-builder')} sx = {{height: '100%', width: '100%'}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', height: '100%', width: '100%'
                        }}>
                            <Box component='img' src = 'https://cdn-icons-png.flaticon.com/512/5526/5526531.png' sx = {{height: '30%'}}/>
                            <Typography variant = 'h5'>
                                Vocabulary Builder
                            </Typography>
                            <Typography variant = 'body2' sx = {{width: '80%'}}>
                            I decided to develop an application to improve SAT vocabulary using a new tech stack. 
                            The app allows users to store words with definitions and presents them in interactive flashcards.
                            </Typography>
                            <Typography variant = 'body2'>
                                Tech Stack: Python, Flask, SQL
                            </Typography>
                        </Box>
                    </ButtonBase>
                </Card>
                <Card >
                    <ButtonBase onClick = {()=>redirectToLink('https://github.com/cornellh4i/IMA')} sx = {{height: '100%', width: '100%'}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', height: '100%', width: '100%'
                        }}>
                            <Box component='img' src = {IMA} sx = {{height: '30%'}}/>
                            <Typography variant = 'h5'>
                                IMA
                            </Typography>
                            <Typography variant = 'body2' sx = {{width: '80%'}}>
                            Collaborating with four team members from IMA, I developed an application that securely stores H4I alumni information 
                            and displays it in organized cards, making it easily accessible to current members.
                            </Typography>
                            <Typography variant = 'body2'>
                                Tech Stack: MERN
                            </Typography>
                        </Box>
                    </ButtonBase>
                </Card>
                <Card >
                    <ButtonBase onClick = {()=>redirectToLink('https://github.com/Akul9092/Akul9092.github.io.git')} sx = {{height: '100%', width: '100%'}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', height: '100%', width: '100%'
                        }}>
                            <Box component='img' src = {Website} sx = {{height: '30%'}}/>
                            <Typography variant = 'h5'>
                                Personal Website
                            </Typography>
                            <Typography variant = 'body2' sx = {{width: '80%'}}>
                                A website to share a little bit about me and the work I've done. This is the Github link for this website. 
                            </Typography>
                            <Typography variant = 'body2'>
                                Tech Stack: React.js
                            </Typography>
                        </Box>
                    </ButtonBase>
                </Card>
            </Box>
            {/* <Box
                display='flex'
                justifyContent='center'
                width='100%'
                sx={{ border: '0px solid', borderColor: 'primary.main', borderRadius: 4, marginBottom: 2 }}
            >
                <Typography variant='h3'>
                My Experiences
                </Typography>
            </Box>
            <Box
            display='flex'
            justifyContent='space-evenly'
            sx={{
                width: '100%',
                height: '40dvh',
            }}
            >
                <Card >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%', width: '100%'
                    }}>
                    </Box>
                </Card>
                <Card>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%', width: '100%', 
                    color: 'text.main',         
                    '&:hover': {
                        color: 'secondary.main',
                    },
                }}>
                    </Box>
                </Card>
                <Card>
                </Card>
                <Card>
                </Card>
            </Box> */}
        </Box>

    );
}

export default Resume;