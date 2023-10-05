import * as React from 'react';
import '../../index.css'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" 
    className='
    text-lightbrown'>
      {/* {'Copyright © '} */}
      <Link color="inherit" href="https://www.linkedin.com/in/itwela/">
        Linkedin
      </Link>{' '}
      <Link color="inherit" href="https://github.com/itwela">
        Github
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          placeItems: 'center',
          minWidth: '80vw',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 1,
            mt: 'auto',
            zIndex: '120',
            position: 'fixed',
            bottom: '0',
            width: '100vw',
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" className='
            text-lightbrown
            font-main
            italic'>
              Itwela Ibomu - Creative Software Developer
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}