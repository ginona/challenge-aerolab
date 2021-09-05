import CardsContainer from './components/Cards/CardsContainer'
import { UserProvider } from './context/userContext'

function App() {

  return (
    <div>
      <UserProvider>
        <CardsContainer />
      </UserProvider>
    </div>
  );
}

export default App;
