import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../styles/styles';

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>

      {'Copyright © '}

            Api blue
            {' '}
            {new Date().getFullYear()}
            {' .'}
    </Box>
  );
};

export default Footer;