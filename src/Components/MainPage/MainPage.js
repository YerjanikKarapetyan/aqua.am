import React,{useState}from "react";
import './MainPage.css';
import Fish from '../Fish/Fish';

const MainPage = () =>{

    const [select, setSelect] = useState('');
    const pressSelect = (eventSelect) => {
       setSelect(eventSelect.target.value);
       setSelect(console.log(''))
    }
 
  
    
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
                            <img src={require('../Fish/betta1.jpg')} className="fish-image-port" value = {select} onClick={pressSelect}/>
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
                            <h3>Budgerigars</h3>
                            <img src={require('../Fish/Budg.jpg')} className="parrot-image-port" />
                        </li>
                        <li>
                            <h3>Cockatiels</h3>
                            <img src={require('../Fish/Cock.jpg')} className="parrot-image-port" />
                        </li>
                        <li>
                            <h3>Cockatoos</h3>
                            <img src={require('../Fish/Kakadu.jpg')} className="parrot-image-port" />
                        </li>
                        <li>
                            <h3>Macaws</h3>
                            <img src={require('../Fish/Macaw.jpg')} className="parrot-image-port" />
                        </li>
                        <li>
                            <h3>Conures</h3>
                            <img src={require('../Fish/Conure.jpg')} className="parrot-image-port" />
                        </li>
                        <li>
                            <h3>Ringnecks</h3>
                            <img src={require('../Fish/Ringneck.jpg')} className="parrot-image-port" />
                        </li>
                        <li>
                            <h3>Kakariki</h3>
                            <img src={require('../Fish/Kakariki.jpg')} className="parrot-image-port" />
                        </li>
                        <li>
                            <h3>Other</h3>
                            <img src={require('../Fish/bird.jpg')} className="parrot-image-port" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MainPage;