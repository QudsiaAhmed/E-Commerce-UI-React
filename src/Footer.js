import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'rgb(65, 81, 97)', color: '#fff' ,marginTop:"2rem"}}>
            <div style={{ maxWidth: '1200px', margin: '0 auto'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" style={{ color: '#fff' ,marginTop:'2rem'}}>Custom Print Store</Typography>
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <a href="#" style={{ marginRight: '10px', color: '#fff' }}>
                                <InstagramIcon />
                            </a>
                            <a href="#" style={{ marginRight: '10px', color: '#fff' }}>
                                <TwitterIcon />
                            </a>
                            <a href="#" style={{ marginRight: '10px', color: '#fff' }}>
                                <LinkedInIcon />
                            </a>
                            <a href="#" style={{ marginRight: '10px', color: '#fff' }}>
                                <FacebookIcon />
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" style={{ color: '#fff' ,marginTop:'2rem'}}>Get in Touch with Us</Typography>
                        <Typography style={{ marginTop: '20px' }}>
                            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" style={{ color: '#fff',marginTop:'2rem' }}>Quick Links</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" style={{ color: '#fff',marginTop:'2rem' }}>Important Links</Typography>
                    </Grid>
                </Grid>
                <hr style={{ borderColor: '#fff' , marginTop:'5rem'}} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '14px' }}>
                    <p>Copyright © 2023 | Custom Printing</p>
                    <p>Powered By Custom Printing</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
