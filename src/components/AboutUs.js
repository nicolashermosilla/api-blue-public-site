import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import bestTeams from '../images/bestTeams.jpg';
import useStyles from '../styles/styles';

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsContainer}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <img src={bestTeams} alt="My Team" className={classes.largeImage} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Crea, integra y conecta
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
          Api blue se especializa en servicios de integración con whatsapp para negocios.
          Nuestros servicios son creados a medida de las necesidades del cliente con el fin de conectar 
          tu negocio con el cliente mediante whatsapp.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            Habla con nosotros
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;