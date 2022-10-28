import { ThemeProvider } from '@mui/system'
import { Container, Typography, Box } from '@mui/material'
import { useEffect } from 'react';
import theme from './styles/theme'
import Appbar from './components/appBar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';

function App() {
  useEffect(() => {
    document.title = 'Home | Store Ecommarce';
  }, []);
  return (
    <ThemeProvider theme={theme}>
    <Container
      maxWidth='xl'
      sx={{background: '#fff'}}
      >
      <Appbar />
      <Banner />
      <Promotions />
      <Box display='flex' justifyContent={'center'} sx={{p:4}}>
        <Typography variant="h4">Our Products</Typography>
      </Box>
      <Products />
    </Container>
    </ThemeProvider>
  );
}

export default App;
