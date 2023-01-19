import { ThemeProvider } from '@mui/system'
import { Container, Typography, Box } from '@mui/material'
import { useEffect } from 'react';
import theme from './styles/theme'
import Appbar from './components/appBar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import Search from './components/search';

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
      <UIProvider>
        <Appbar />
        <Banner />
        <Promotions />
        <Box display='flex' justifyContent={'center'} sx={{p:4}}>
          <Typography variant="h4">Our Products</Typography>
        </Box>
        <Products />
        <Footer />
        <AppDrawer />
        <Search />
      </UIProvider>
    </Container>
    </ThemeProvider>
  );
}

export default App;