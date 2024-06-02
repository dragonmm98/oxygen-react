import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import '../css/App.css';
import { RippleBadge } from './MaterialTheme/styled';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Container maxWidth="sm">
    <Stack flexDirection={"column"}>
      <Box sx={{my:4}}>
        <Typography variant='h4' component={"h1"} gutterBottom>
          Create App on Typecript with REDUX
        </Typography>
        <RippleBadge badgeContent={4}>
        <Button color="secondary" variant="contained">
  Disable elevation
</Button>
</RippleBadge>
        </Box> 
    </Stack>

  </Container>
  );
}

export default App;
