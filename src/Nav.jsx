import React from "react";
import {Link,NavLink,Route,Switch} from "react-router-dom";


function Nav(){
    return(
       <>
       <nav className="navbar navbar-expand-lg navbar sticky-top navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <NavLink className="navbar-brand" to="#"><img src="https://www.logotaglines.com/wp-content/uploads/2016/08/26-1443262056-myntra-logo-image-1200x900.jpg" className="logo"></img></NavLink>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item ">
        <NavLink to="/" className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item ">
        <NavLink to="/Men" className="nav-link">MEN<span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Women">WOMEN</NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link " to="/Offers">OFFRES</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link " to="/Cart">CART</NavLink>
      </li>
      
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 search" type="search" placeholder="This is not Working " aria-label="Search" ></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


       </>
    );
}
export default Nav;