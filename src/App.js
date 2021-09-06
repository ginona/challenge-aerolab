import Header from './components/Header/Header'
import { UserProvider } from './context/UserContext'
import CardsContainer from './components/Cards/CardsContainer'
import ProductsHistory from './components/ProductsHistory/ProductHistory'

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
