import React from "react";
import './MainPage.css';

const MainPage = () =>{

  
    
    return(
        <>
            <div className="main-page-first-image">
                <div className="fishpage">
                    <h2>
                        Aquarium Fishes
                    </h2>
                    <ul className="main-page-fishes">
                        <li>
                            <h3>Betta</h3>
                            <img src={require('../Fish/betta1.jpg')} className="fish-image-port"/>
                        </li>
                        <li>
                            <h3>Guppy</h3>
                            <img src={require('../Fish/guppy.png')} className="fish-image"/>
                        </li>
                        <li>
                            <h3>Angelfish</h3>
                            <img src={require('../Fish/angelfish1.jpg')} className="fish-image-port"/>
                        </li>
                        <li>
                            <h3>Platy Fish</h3>
                            <img src={require('../Fish/platty.jpg')} className="fish-image-port" />
                        </li>
                        <li>
                            <h3>Swordtail Fish</h3>
                            <img src={require('../Fish/swordtail.jpg')} className="fish-image-port" />
                        </li>
                        <li>
                            <h3>Cory Catfish</h3>
                            <img src={require('../Fish/cory.jpg')} className="fish-image-port" />
                        </li>
                        <li>
                            <h3>Golden Fish</h3>
                            <img src={require('../Fish/golden.jpg')} className="fish-image-port" />
                        </li>
                        <li>
                            <h3>Other</h3>
                            <img src={require('../Fish/neon.jpg')} className="fish-image-port" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-page-second-image">
                <div className="parrotpage">
                    <h2>
                        Parrots
                    </h2>
                    <ul className="main-page-parrots">
                        <li>
                            <a>Budgerigars</a>
                        </li>
                        <li>
                            <a>Cockatiels</a>
                        </li>
                        <li>
                            <a>Cockatoos</a>
                        </li>
                        <li>
                            <a>Macaws</a>
                        </li>
                        <li>
                            <a>Conures</a>
                        </li>
                        <li>
                            <a>Ringnecks</a>
                        </li>
                        <li>
                            <a>Kakariki</a>
                        </li>
                        <li>
                            <a>Other</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MainPage;