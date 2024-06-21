import logo from './logo.svg';
import './App.css';
import ProductList from './Components/ProductList';

import { useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  const [page, setpage] = useState(0)
  return (
    <div className="App">
      
      <Navbar setpage={setpage}/>
      {page==0?<About/>:page==1?<Contact/>:page==2?<ProductList/>:null}
    </div>
  );
}

export default App;