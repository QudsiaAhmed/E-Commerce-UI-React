import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './style.css';

const ChatBox = () => {
    return (
        <Box
            sx={{
                padding: '20px',
                borderRadius: '10px',
                marginTop: '2rem',
                height: '715px'
            }}
            className="chat-box"
        >
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                    <div className="chat-container">
                        <h2 className="chat-header" style={{ color: 'rgb(65, 81, 97)', fontSize: "5rem" }}>
                            We Print What <br /> You Want!
                        </h2>
                    </div>
                    <Typography variant="body1" style={{ color: 'rgb(65, 81, 97)', fontSize: "1.5rem", marginTop: "2rem", lineHeight: "1.5", marginLeft: '5rem' }}>
                        Click edit button to change this text. Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. Sapien.
                    </Typography>

                    <Button
                        sx={{
                            marginTop: '3rem',
                            width: '200px',
                            height: '50px',
                            marginLeft: '5rem',
                            color: '#fff',
                            backgroundColor: 'rgb(245, 80, 64)',
                            '&:hover': {
                                backgroundColor: 'rgb(255, 81, 81) ',
                            },
                        }}
                    >
                        Click Me
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} className="image-grid">
                    <div className="image-container">
                        <img
                            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/image26-free.png"
                            alt="Chat"
                        />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChatBox;
