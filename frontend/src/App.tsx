import UserTable from './components/UserTable';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
        <UserProvider>
          <UserTable />
        </UserProvider>
    </div>
  );
}

export default App;
