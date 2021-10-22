import React from "react";
import MainPage from "./components/MainPage"
import CheckOut from "./components/CheckOut";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
{/* <Cart/> */}
<Navbar/>
<Switch>
  <Route exact path="/" component={MainPage}/>
  <Route exact path="/checkout" component={CheckOut}/>
</Switch>
    </Router>
      
    </>
  );
}

export default App;
