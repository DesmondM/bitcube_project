import './App.css';
import AddStockItem from './components/AddStockItem';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Stock Control System</h2>
      <AddStockItem/>
    </header>
     </div>
  );
}

export default App;
