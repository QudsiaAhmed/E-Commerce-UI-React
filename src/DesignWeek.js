import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { css } from '@emotion/react';

const cardContainer = css`
  display: flex;
  justify-content: center;
  margin: 10rem auto 0; 
  max-width: 1200px; 
`;

const cardStyle = css`
  width: 100%;
`;

const imageStyle = css`
  width: 100%;
  height: auto;
`;

const cardContentStyle = css`
  text-align: center;
`;

const DesignWeek = () => {
  return (
    <Grid container sx={cardContainer}>
      <Grid item xs={12} md={4}>
        <Card sx={cardStyle}>
          <CardMedia
            component="img"
            image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-01.jpg"
            alt="Image 1"
            css={imageStyle}
          />
          <CardContent sx={cardContentStyle}>
            <Typography variant="body2" color="text.secondary">
              Most Loved Design<br /><span style={{fontWeight:'bold',fontSize:'1.2rem'}}>Customize Your T-Shirts</span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={cardStyle}>
        <CardContent sx={cardContentStyle}>
            <Typography variant="body2" color="text.secondary">
              Design of the Week<br /><span style={{fontWeight:'bold',fontSize:'1.2rem'}}>Rubber Print Your T-Shirt</span>
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-03.jpg"
            alt="Image 2"
            css={imageStyle}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={cardStyle}>
          <CardMedia
            component="img"
            image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-02.jpg"
            alt="Image 3"
            css={imageStyle}
          />
          <CardContent sx={cardContentStyle}>
            <Typography variant="body2" color="text.secondary">
              New T-shirt Edition<br /><span style={{fontWeight:'bold',fontSize:'1.2rem'}}>Customize Plain Colors</span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DesignWeek;
