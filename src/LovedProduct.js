import React from 'react';
import { Container, Card, CardContent, CardMedia, Grid, Rating } from '@mui/material';

const LovedProduct = () => {
  return (
    <>
    <Container maxWidth="lg">
      <h2 style={{ marginTop: '8rem', textAlign: 'center' }}>Most Loved Products</h2>
      <div style={{ width: '7rem', height: '.3rem', backgroundColor: 'red', margin: '2rem auto' }}></div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ height: '100%', marginTop: '1.8rem' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4.jpg"
              alt="Card 1"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>Tshirts</div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>SkyBlue Printed Tshirts</span>
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
              image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt6-300x300.jpg"
              alt="Card 2"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>Tshirts</div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Brown Printed Tshirts</span>
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
              image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt2-300x300.jpg"
              alt="Card 3"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>Tshirts</div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Blue Printed Tshirts</span>
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
              image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt5-300x300.jpg"
              alt="Card 4"
            />
            <CardContent style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>Tshirts</div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>Green Printed Tshirts</span>
              <div style={{marginTop:'1rem'}}>
                <Rating name="product-rating-4" value={null} readOnly />
              </div>
              <span>£15.00</span>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default LovedProduct
