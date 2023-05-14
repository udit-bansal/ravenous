import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessList from './components/BusinessList';
import Search from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <b>ravenous</b>
        </p>
      </header>
      <Search />
      <BusinessList />
    </div>
  );
}

export default App;