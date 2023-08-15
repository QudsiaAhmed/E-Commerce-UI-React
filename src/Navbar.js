import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Product from './Product';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: { xs: '1rem', md: 0 },
                  marginLeft: { xs: 0, md: 0, lg: '8rem', xl: '8rem' },
                }}
              >
                <img
                  src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/print-1.svg"
                  alt="Logo"
                />
                <span
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '1.2rem',
                    color: 'rgb(65, 81, 97)',
                    fontWeight: 'bold',
                    marginLeft: { xs: 0, md: 0, lg: '3rem', xl: '3rem' }, 
                  }}
                >
                  Best Quality Products
                </span>
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={9} xl={9}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginTop: { xs: '1rem', md: 0 },
                  
                }}
              >
                <Button variant="body1" component="span" sx={{ mr: 1, color: 'rgb(255, 81, 81)' }}>
                  HOME
                </Button>
                <Button onClick={() => navigate('/Product')} color="inherit" sx={{ mr: 1, color: 'rgb(100, 92, 102)' }}>
                  ALL PRODUCTS
                </Button>
                <Button color="inherit" sx={{ mr: 1, color: 'rgb(100, 92, 102)' }}>
                  ABOUT
                </Button>
                <Button color="inherit" sx={{ mr: 1, color: 'rgb(100, 92, 102)' }}>
                  CONTACT
                </Button>
                <Button color="inherit" sx={{ mr: 1, color: 'rgb(100, 92, 102)' }}>
                  ACCOUNT
                </Button>
                <Typography variant="body1" component="span" style={{ color: 'rgb(255, 81, 81)' }}>
                  £0.00
                  <ShoppingCartIcon style={{ marginLeft: '0.5rem' }} />
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
