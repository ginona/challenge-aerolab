import React from 'react';
import Header from './components/Header/Header'
import CardsContainer from './components/Cards/CardsContainer'
import ProductsHistory from './components/ProductsHistory/ProductHistory';
import { UserProvider } from './context/userContext'

function App() {

  return (
    <div>
      <UserProvider>
        <Header />
        <CardsContainer />
        <ProductsHistory />
      </UserProvider>
    </div>
  );
}

export default App;
