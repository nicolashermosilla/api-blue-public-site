import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import chatPerson from '../images/chatPerson.jpg';
import useStyles from '../styles/styles';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Conecta con tus clientes
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
          Cada día las personas utlizan whatsapp para conectar con amigos y servicios. Utiliza whatsapp para llegar a tus clientes de una manera cercana e instantanea.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={chatPerson} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;