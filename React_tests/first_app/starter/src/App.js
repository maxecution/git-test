import './App.css';
import InventoryTable from './components/InventoryTable';
import MilesToKmConverter from './components/MilesToKmConverter';
import MyComponent from './components/MyComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <MyComponent />
      <MilesToKmConverter />
      <InventoryTable />
    </>
  );
}
export default App;
