import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';

const Company = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={12} sx={{ marginTop: '4rem' }}>
          <Paper elevation={3} style={{ padding: '0', boxShadow: 'none', marginBottom: '0' }}>
            <Typography variant="h5" style={{ textAlign: 'left', marginBottom: '0', fontWeight: 'bold', color: 'rgb(65,81,107)' }}>
              Featured In:
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ margin: { xs: '1rem', sm: '0.5rem', md: '1rem' } }}>
          <img
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-2.png"
            alt="Logo 1"
            width="150"
            height="120"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ margin: { xs: '1rem', sm: '0.5rem', md: '1rem' } }}>
          <img
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-7.png"
            alt="Logo 2"
            width="150"
            height="120"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ margin: { xs: '1rem', sm: '0.5rem', md: '1rem' } }}>
          <img
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-9.png"
            alt="Logo 3"
            width="150"
            height="120"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ margin: { xs: '1rem', sm: '0.5rem', md: '1rem' } }}>
          <img
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-10.png"
            alt="Logo 4"
            width="150"
            height="120"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ margin: { xs: '1rem', sm: '0.5rem', md: '1rem' } }}>
          <img
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-11.png"
            alt="Logo 5"
            width="150"
            height="120"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Company;
