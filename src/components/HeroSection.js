import React from 'react'
import { Typography, Button, Grid2 } from '@mui/material';
import { Box } from '@mui/system';
import Cake from '../images/pexels-asadphoto-1456291.jpg'

const HeroSection = () => {
    return (
        <Grid2 container direction="row" alignItems="center">
           <Grid2 item xs={12} sm={6} md={4} order={{xs:2,sm:1}}>
               <Typography variant="h3">
                  A bliss in every byte
               </Typography>
               <Typography variant="h5">
                  we offer tasty cakes and sweets for you.
               </Typography> 
               <Button size="large" variant="contained" sx={{borderRadius:5}}>
                  Call us
               </Button>
           </Grid2>
           <Grid2 container item xs={12} sm={6} md={4} justifyContent="center" order={{xs:1,sm:2}}>
               <Box component="img" src={Cake}/>
           </Grid2>
        </Grid2>
    )
}

export default HeroSection