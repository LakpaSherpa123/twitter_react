import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthConfig from "./pages/AuthConfig";
import AlpacaConfig from "./pages/AlpacaConfig";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrderSummary from "./pages/OrderSummary";
import OpenPositions from "./pages/OpenPositions";
import Auth from "./pages/Auth";

function App() {
  //mistakenlty pushed code with my brother git
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/open-positions" element={<OpenPositions />} />
          <Route path="/order-history" element={<OrderSummary />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/AuthConfig" element={<AuthConfig />} />
          <Route path="/AlpacaConfig" element={<AlpacaConfig />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
