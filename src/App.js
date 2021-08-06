

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App()  {

  return (
    
    <div className="Header">
      <Router>
      <Navbar />
    <Route path='/' exact component={Home} />
    <Route path='/features' component={Features} />
    <Route path='/pricing' component={Pricing} />
      </Router> 
    </div>

  );
        }

export default App;
