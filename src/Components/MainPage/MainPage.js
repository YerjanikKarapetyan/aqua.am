import React from "react";
import './MainPage.css';
import { ReactComponent as betta } from '../../image/betta.png'

const MainPage = () =>{
    
    return(
        <>
            <div className="main-page-first-image">
                <div className="fishpage">
                    <h1>
                        Aquarium Fishes
                    </h1>
                    <ul className="main-page-fishes">
                        <li>
                            <a>Betta</a>
                        </li>
                        <li>
                            <a>Guppy Fish</a>
                        </li>
                        <li>
                            <a>Angelfish</a>
                        </li>
                        <li>
                            <a>Platy Fish</a>
                        </li>
                        <li>
                            <a>Swordtail Fish</a>
                        </li>
                        <li>
                            <a>Cory Catfish</a>
                        </li>
                        <li>
                            <a>Golden Fish</a>
                        </li>
                        <li>
                            <a>Other</a>
                        </li>
                    </ul>
                </div>
                <div className="betta">
                </div>
            </div>
            <div className="main-page-second-image">
            <div className="parrot">
                </div>
                <div className="parrotpage">
                    <h1>
                        Parrots
                    </h1>
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