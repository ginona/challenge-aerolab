import { UserProvider } from './context/UserContext'
import CardsContainer from './components/Cards/CardsContainer'
import Header from './components/Header/Header'
import ProductsHistory from './components/ProductsHistory/ProductHistory'

function App() {
  return (
      <UserProvider>
        <Header />
        <CardsContainer />
        <ProductsHistory />
      </UserProvider>
  );
}

export default App;
