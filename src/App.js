
import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages'; 
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';
 

function App() {

  const [isOpen, setisIsOpen] = useState(false);

  const toggle = () => { 
    setisIsOpen(!isOpen)
  }

  useEffect(() => {
    const hiddenMenu = () => { 
      if (window.innerWidth > 768 && isOpen) { 
        setisIsOpen(false)
      }
    }

    window.addEventListener('resize', hiddenMenu,)
    
    return () => { 
      window.removeEventListener('resize ', hiddenMenu);
    }
  });


  return (
    <>
      <Navbar toggle={ toggle}/>
      <Dropdown toggle={toggle} isOpen={ isOpen}/>
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/menu" exact component={Menu}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
