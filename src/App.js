import logo from './logo.svg';
import './App.css';
import {AddHouse} from "./Components/AddHouse/AddHouse"
import { Rentals } from './Components/Rentals/Rentals';

function App() {
  return (
    <div className="App">
      <Rentals/>
      <AddHouse/>
      
    </div>
  );
}

export default App;
