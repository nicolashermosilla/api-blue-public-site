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
            <br></br>
            +56 9 7898 2012
    </Box>
  );
};

export default Footer;