import React from "react";
import { MDBCol } from "mdbreact";
import '../App.css';
import { SocialIcon } from 'react-social-icons';
import {Mailchimp} from 'mailchimp';


const FooterPage = () => {
    return (
        <div className="footer bg-blue-600">
            <div class="flex flex-wrap justify-center bg-purple-800 p-6">
                <div class="flex flex-wrap mb-4 w-full">
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
                        <h3 class="text-3xl py-4 cursive">About This Page</h3>
                        <p>This Page is a gallery of products and work by Rachel.  She is a smart and capable talented individual who would be an asset to anyone.
                           <br /> Page is built in React.js with TailwindsCSS and Sanity.io CMS.

                        </p>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
                        <h3 class="cursive text-3xl py-4">Links</h3>
                        <ul>
                            <li className="items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-100 text-1xl font-bold cursive tracking-widest">
                                <a href="https://www.linkedin.com/in/rachel-s-40636296/">LinkedIn</a>
                            </li>
                            <li className="items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-100 text-1xl font-bold cursive tracking-widest">
                                <a href="https://github.com/mikilao">Github</a>
                            </li>
                            <li className=" items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-100 text-1xl font-bold cursive tracking-widest">
                                <a href="http://www.systemley.com">Systemley.com</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
                        <MDBCol className="my-6 py-3 px-3">
                            <SocialIcon url="https://twitter.com/DASHtagOrlando" className=" mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                            <SocialIcon url="https://www.facebook.com/systemley" className=" mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                            <SocialIcon url="https://github.com/mikilao" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />

                        </MDBCol>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <h3 className="text-3xl py-4 cursive">Email me</h3>
                        
                        
                        <div id="mc_embed_signup" className="relative container mx-auto bg-purple-800 opacity-90 rounded-lg shadow-2xl lg:flex p-20">
                            Subscribe
                            <Mailchimp 
         action="https://systemley.us7.list-manage.com/subscribe/post?u=687867956a52e7aa90494d2d0&amp;id=6e59f97980"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default FooterPage;