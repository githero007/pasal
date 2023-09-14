import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import {Navbar} from './Navbar';
import {Shop} from './Shop';
import {Cart} from './Cart'

import { ShopContext, ShopContextProvider } from './shop_context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <Router>
      <Navbar/>
            <Routes>
              
        <Route path = "/" element = {<Shop/>} />
        <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
