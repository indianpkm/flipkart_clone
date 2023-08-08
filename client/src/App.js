import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material'
import DataProvider from './context/DataProvider';
import Cart from './components/cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailsView from './components/details/DetailsView';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }} >
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<DetailsView/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
