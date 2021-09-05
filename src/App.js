import CardsContainer from './components/Cards/CardsContainer'
import Header from './components/Header/Header'
import { UserProvider } from './context/userContext'

function App() {

  return (
    <div>
      <UserProvider>
        <Header />
        <CardsContainer />
      </UserProvider>
    </div>
  );
}

export default App;
