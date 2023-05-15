import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessList from './components/BusinessList/BusinessList';
import Search from './components/SearchBar/SearchBar';

const businesses = [{
  image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: 'Business Name 1',
  address: 'Apt 1, Street Name',
  city: 'city 1',
  state: 'Texas',
  zipcode: '75024',
  category: 'Restaurant',
  rating: 4.5,
  review_count: 100
}
, {
  image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  name: 'Business Name 2',
  address: 'Apt 2, Street Name',
  city: 'city 2',
  state: 'state',
  zipcode: '75024',
  category: 'Restaurant',
  rating: 3.5,
  review_count: 500
},{
  image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  name: 'Business Name 2',
  address: 'Apt 2, Street Name',
  city: 'city 2',
  state: 'state',
  zipcode: '75024',
  category: 'Restaurant',
  rating: 3.5,
  review_count: 500
}, {
  image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: 'Business Name 1',
  address: 'Apt 1, Street Name',
  city: 'city 1',
  state: 'state',
  zipcode: '75024',
  category: 'Restaurant',
  rating: 4.5,
  review_count: 100
},{
  image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  name: 'Business Name 2',
  address: 'Apt 2, Street Name',
  city: 'city 2',
  state: 'state',
  zipcode: '75024',
  category: 'Restaurant',
  rating: 3.5,
  review_count: 500
}, {
  image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: 'Business Name 1',
  address: 'Apt 1, Street Name',
  city: 'city 1',
  state: 'state',
  zipcode: '75024',
  category: 'Restaurant',
  rating: 4.5,
  review_count: 100
}, {
  image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  name: 'Business Name 2',
  address: 'Apt 2, Street Name',
  city: 'city 2',
  state: 'state',
  zipcode: '75024',
  category: 'Restaurant',
  rating: 3.5,
  review_count: 500
}, {
  image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: 'Business Name 1',
  address: 'Apt 1, Street Name',
  city: 'city 1',
  state: 'state',
  zipcode: '75024',
  category: 'Restaurant',
  rating: 4.5,
  review_count: 100
}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <b>ravenous</b>
        </p>
      </header>
      <Search />
      <BusinessList businessList={businesses}/>
    </div>
  );
}

export default App;