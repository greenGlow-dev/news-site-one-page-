import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import './style.css'

export const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {

        setIsActive(current => !current);
    };

    // var header = document.getElementById("myDIV");
    // var btns = header.getElementsByClassName("navLink");
    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function () {
    //         var current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });
    // }

    return (
        <div className='Container'>

            <div className='Wrapper'  id='myDIV' >
                
                <div className='Item' ><NavLink to='/Yangilik' className='navLink' > Yangilik</NavLink></div>
                <div className='Item' ><NavLink to='/Jamiyat' className='navLink'  > Jamiyat</NavLink></div>
                <div className='Item' ><NavLink to='/Maxsus' className='navLink'> Maxsus</NavLink></div>
                <div className='Item' ><NavLink to='/Munosabat' className='navLink'> Munosabat</NavLink></div>
                <div className='Item' ><NavLink to='/Jarayon' className='navLink'> Jarayon</NavLink></div>
                <div className='Item' ><NavLink to='/Tadqiqot' className='navLink'> Tadqiqot</NavLink></div>

            </div>
            <div className='SearchIcon' >
            <BsSearch/>
            </div>
          
        </div>
    )
}
export default Navbar;
