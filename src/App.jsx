import React from "react";
import { Route,Switch } from "react-router-dom";
import Women from "./Women";
import Men from "./Men";

import Offers from "./Offers";
import Home from "./Home";
import Cart from "./Cart";

import Nav from './Nav';




function App(){
    return(
       <>
       <Nav />
       <Switch>
       <Route exact path="/" component={Home}></Route>
           <Route exact path="/Men" component={Men}></Route>
           <Route exact path="/Women" component={Women}></Route>
       
           <Route exact path="/Offers" component={Offers}></Route>
           <Route exact path="/Cart" component={Cart}></Route>
       </Switch>
     
      
    
      


       </>
    );
}
export default App;