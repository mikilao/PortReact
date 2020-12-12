import React from 'react';
import {NavLink} from 'react-router-dom';


export default function NavBar(){
    return(
     <header>
         <div>
             <nav>
                 <NavLink to="/" exact>
                     Rachel
                 </NavLink>
                 <NavLink to="/about">
                     About Her
                 </NavLink>
                 <NavLink to="/post">
                     Blog Posts
                 </NavLink>
                 <NavLink to="/project">
                    Projects
                 </NavLink>
               
             </nav>
         </div>
     </header>
    )
} 