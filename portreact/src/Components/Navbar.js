import React from 'react';
import { NavLink } from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-100 text-4xl font-bold cursive tracking-widest" >
                        Rachel
                 </NavLink>
                    <NavLink to="/about"
                     activeClassName="text-blue-100 bg-blue-700"
                        className="inline-flex items-center py-3 px-3 mr-4 text-blue-100 hover:text-green-800 ">
                        About Her
                 </NavLink>
                    <NavLink to="/post"
                    activeClassName="text-blue-100 bg-blue-700"
                        className="inline-flex items-center py-3 px-3 my-2 rounded text-blue-200 hover:text-green-800 ">
                        Blog Posts
                 </NavLink>
                    <NavLink to="/project"
                    activeClassName="text-blue-100 bg-blue-700"
                        className="inline-flex items-center py-3 px-3 my-2 rounded text-blue-200 hover:text-green-800 ">
                        Projects
                 </NavLink>

                </nav>
                <div className="my-6 py-3 px-3">
                    <SocialIcon url="https://twitter.com/DASHtagOrlando" className=" mr-4" target="blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://www.facebook.com/systemley" className=" mr-4" target="blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/mikilao" className="mr-4" target="blank" fgColor="#fff" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
} 