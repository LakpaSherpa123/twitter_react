
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthConfig from './pages/AuthConfig';


function App() {
  return (
    
    <div className="App">
         <BrowserRouter basename='/'> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AuthConfig" element={<AuthConfig />} />
         </Routes>
     </BrowserRouter> 
      
    </div>
  );
}

export default App;
