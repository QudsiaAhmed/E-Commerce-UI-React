import React from 'react';
import { Container, Card, CardContent, CardMedia, Grid, Rating } from '@mui/material';

const FeaturedProduct = () => {
  return (
    <Container maxWidth="lg">
      <h2 style={{ marginTop: '8rem', textAlign: 'center' }}>Our Featured Products</h2>
      <div style={{ width: '7rem', height: '.3rem', backgroundColor: 'red', margin: '2rem auto' }}></div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ height: '100%', marginTop: '1.8rem' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-white-300x300.jpg"
              alt="Card 1"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>Mugs</div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Black Printed Coffee Mug</span>
              <div style={{marginTop:'1rem'}}>
                <Rating name="product-rating-1" value={null} readOnly />
              </div>
              <span>£15.00</span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ height: '100%', marginTop: '1.8rem' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee-300x300.jpg"
              alt="Card 2"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>Mugs</div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Father's Day Coffee Mug</span>
              <div style={{marginTop:'1rem'}}>
                <Rating name="product-rating-2" value={null} readOnly />
              </div>
              <span>£15.00</span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ height: '100%', marginTop: '1.8rem' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg"
              alt="Card 3"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>Mugs</div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Personalised Mug</span>
              <div style={{marginTop:'1rem'}}>
                <Rating name="product-rating-3" value={null} readOnly />
              </div>
              <span>£15.00</span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ height: '100%', marginTop: '1.8rem' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-blue-300x300.jpg"
              alt="Card 4"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>Mugs</div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Valentine's Day Mug</span>
              <div style={{marginTop:'1rem'}}>
                <Rating name="product-rating-4" value={null} readOnly />
              </div>
              <span>£15.00</span>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FeaturedProduct;
