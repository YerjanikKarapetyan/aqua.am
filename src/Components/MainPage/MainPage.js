import React from "react";
import './MainPage.css';
import { ReactComponent as betta } from '../../image/betta.png'

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
                            <a>Betta</a>
                            <img src=""/>
                        </li>
                        <li>
                            <a>Guppy Fish</a>
                            <img src=""/>
                        </li>
                        <li>
                            <a>Angelfish</a>
                            <img src=""/>
                        </li>
                        <li>
                            <a>Platy Fish</a>
                            <img src=""/>
                        </li>
                        <li>
                            <a>Swordtail Fish</a>
                            <img src=""/>
                        </li>
                        <li>
                            <a>Cory Catfish</a>
                            <img src=""/>
                        </li>
                        <li>
                            <a>Golden Fish</a>
                            <img src=""/>
                        </li>
                        <li>
                            <a>Other</a>
                            <img src=""/>
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