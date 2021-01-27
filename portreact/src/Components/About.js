import React, { useEffect, useState } from 'react';
import sanityClient from '../Client';
//import sunsetselfie from '../sunsetselfie.jpg';
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react';
import typewriter from "../typewriter.jpg";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == 'author']{
    name,
    bio,
    'authorImage':image.asset->url
  }`
            )
            .then((data) => setAuthor(data[0]))
            .catch((error) => console.log(error));
    }, []);

    if (!author) return <div>Loading...</div>;
    return (
        <div>
            <main className="relative">
                <img src={typewriter} alt="typewriter" className='absolute w-full' />

                <div className='relative container mx-auto p-10 lg:pt-48'>
                    <section className='bg-purple-800 opacity-90 rounded-lg shadow-2xl lg:flex p-20'>
                        <img src={urlFor(author.authorImage).url()} alt={author.name} className="rounded w-28 h-32 lg:w-48 h-64 mr-8" />
                        <div className="text-lg flex flex-col justify-center">
                            <h1 className="cursive text-4xl text purple-300 mb-4"> Hi there I'm {" "}
                                <span className="text-purple-200"> {author.name}</span></h1>
                            <div className="prose lg:prose-xl text-white">
                                <BlockContent blocks={author.bio} projectId="z6srao49" dataset="production" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <div id="mc_embed_signup" className="relative container mx-auto bg-purple-800 opacity-90 rounded-lg shadow-2xl lg:flex p-20">
                <form action="https://systemley.us7.list-manage.com/subscribe/post?u=687867956a52e7aa90494d2d0&amp;id=6e59f97980" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div className="relative flex justify-center my-22" id="mc_embed_signup_scroll">
                        <h2>Contact Me</h2>
                        <div className="indicates-required inline-flex mx-10"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group">
                            <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                            </label>
                            <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL">

                            </input>
                        </div>

                        <div className="mc-field-group relative px-auto mx-2">
                            <label for="mce-FNAME">First Name </label>
                            <input type="text" value="" name="FNAME" className="h-10 pr-10 flex justify-center " id="mce-FNAME"></input>
                        </div>
                        <div className="mc-field-group relative px-auto mx-2">
                            <label for="mce-LNAME">Last Name </label>
                            <input type="text" value="" name="LNAME" className="h-10 pl-10" id="mce-LNAME" />
                        </div>

                    </div>


                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>

                </form>
            </div>
        </div>
        /*/div>	
        <div id="mce-responses" className="clear">
                                                        <div className="response" id="mce-error-response" >
        
                                                        </div>
                                                        <div className="response" id="mce-success-response" >
        
                                                        </div>
                                                    </div>    
            <div   className="something" aria-hidden="true">
                <input type="text" name="b_687867956a52e7aa90494d2d0_6e59f97980" tabindex="-1" value="" >
                                                    </input>
                                                    </div>
                                                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /> 
                                                    
                                                    </div>
        */


    )
} 