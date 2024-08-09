
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import TestConnection from './components/TestConnection';

function App() {
  return (
    <div className="App">
       <Navbar/>
        <TestConnection/>
        <api/>
    </div>
  );
}

export default App;
