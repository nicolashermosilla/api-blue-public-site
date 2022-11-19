import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import GroupsdIcon from '@mui/icons-material/Groups';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import useStyles from '../styles/styles';

const Section = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      icon: <GroupsdIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Chat multiagente. Organiza las conversaciónes de tu negocio con multiples agentes en un solo número télefonico',
    },
    {
      id: 2,
      icon: <AccountTreeIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Crea campañas, envios masivos y respuestas automaticas a tus clientes.',
    },
    {
      id: 3,
      icon: <QueryStatsIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Metricas y estadisticas de tus cleintes',
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            className={classes.sectionGridItem}
          >
            {item.icon}
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;