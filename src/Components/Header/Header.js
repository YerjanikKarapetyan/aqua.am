import React, { useState } from 'react';
import './Header.css';


const Header = () =>{
   const [link, setLink] = useState('');
   // const refreshLink = (event) => {
   //    setLink(event.target.value);
   //    setLink(event.location.reload())
   // }


    return(
    <div className='header'>
       <ul>
           <li onClick={() => window.location.reload(false)}>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Basket
            </li>
       </ul>
       <span  onClick={() => window.location.reload(false)}>
                 <h4> Aqua.am </h4>
       </span>
    </div>
    )
}

export default Header;