import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Entete' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Entete = () => {

    return (
    <div style={{background: 'rgb(245, 245, 245)'}} >
        <div className="container" >
                <div className="row">
                            <div className="col-sm-2">
                                <img src={require(`../../img/stockx.png`)} className="logo" alt="stockX" />
                            </div>
                    
                            <div className="col-sm-5">
                                <nav className="nav-links nav d-flex justify-content-center ">
                                        <Router>
                                            <Link to='/'><a className="nav-link black" href='' style={{marginTop: 25}} >Accueil</a></Link>
                                            <Link to='/'><a className="nav-link black" href='' style={{marginTop: 25}} >Homme</a></Link>
                                            <Link to='/'><a className="nav-link black" href='' style={{marginTop: 25}} >Femme</a></Link>
                                            <Link to='/'><a className="nav-link black" href='' style={{marginTop: 25}} >Reductions</a></Link>
                                       </Router>
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                </nav>
                                
                            </div>
                            <div className="col-sm-5 cf ">
                                <nav className="navbar search-bar navbar-light cf">
                                        <form className="form-inline " style={{marginTop: 25}}>
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  />
                                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  >Search</button>
                                        </form>
                                </nav>     
                            </div>
        </div>
    </div>
</div>         
)} ;

export default Entete
