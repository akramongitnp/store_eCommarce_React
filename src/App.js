import { ThemeProvider } from '@mui/system'
import { Button, Container } from '@mui/material'
import { useEffect } from 'react';
import theme from './styles/theme'
import Appbar from './components/appBar';

function App() {
  useEffect(() => {
    document.title = 'Home | Store Ecommarce';
  }, []);
  return (
    <ThemeProvider theme={theme}>
    <Appbar /> 
    <Container
      maxWidth='xl'
      sx={{background: '#fff'}}
      >
      <Button variant='contained'>Try Me!</Button>
    </Container>
    </ThemeProvider>
  );
}

export default App;
