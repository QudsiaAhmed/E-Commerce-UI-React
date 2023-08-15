import React from 'react';
import { Container, Card, CardContent, CardActions, Button, Grid, Rating } from '@mui/material';
import Typography from '@mui/material/Typography';

const Client = () => {
  return (
    <>
      <Container maxWidth="lg" style={{ margin: '5rem auto', textAlign: 'center' }}>
        <h2>Our Happy Clients!</h2>
        <div style={{ width: '7rem', height: '.3rem', backgroundColor: 'red', margin: '2rem auto',marginBottom:'5rem' }}></div>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem.""
                </Typography>
                <Rating name="rating-1" value={4.5} readOnly />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                  <img
                    src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/client02-free-img.jpg"
                    alt="Customer"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '1rem' }}
                  />
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    Diana Burnwood
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."</Typography>
                <Rating name="rating-2" value={4.5} readOnly />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                  <img
                    src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/client2-free-img.png"
                    alt="Customer"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '1rem' }}
                  />
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    John Doe
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."</Typography>
                <Rating name="rating-3" value={4.5} readOnly />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                  <img
                    src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/client3-free-img.png"
                    alt="Customer"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '1rem' }}
                  />
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    Jane Smith
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Client;
