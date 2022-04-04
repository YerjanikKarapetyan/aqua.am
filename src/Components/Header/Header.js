import React from 'react';
import './Header.css';
import Fish from '../Fish/Fish';
import Login from '../Login/Login';
import AboutUs from '../About-us/About-us';
import Aquariums from '../Aquariums/Aquariums';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

const Header = () =>{

    return(
    <>
        <div className='header'>
            <div className='header-left-buttons'>
                <Router>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href='/Aquariums'>Aquariums</a>
                        </li>
                        <li>
                            <a href='/Fish'>Fish</a>
                        </li>
                        <li>
                            <a href='/AboutUs'>About us</a>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path='/Aquariums' element={< Aquariums/>}></Route>
                        <Route exact path='/Fish' element={< Fish/>}></Route>
                        <Route exact path='/AboutUS' element={< AboutUs/>}></Route>
                    </Routes>
                </Router>
            </div>
            <div className='header-logo'>
            </div>
            <div className='header-right-buttons'>
                <Router>
                    <ul>
                        <li>
                            <a href='/Login'>Login</a>
                        </li>
                        <li>
                            <span className='header-button'>Try Aqua</span>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path='/Login' element={<Login/>}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    </>
    )
}

export default Header;