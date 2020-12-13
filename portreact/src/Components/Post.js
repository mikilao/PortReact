import React, { useState, useEffect } from 'react';
import sanityClient from "../Client";
import { Link } from "react-router-dom";


export default function Post() {

    const [postData, setPost] = useState(null); //setting the state
      useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [])
    return (
        <main className="bg-yellow-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive"> This is my blog   </h1>
                <h2 className="text-lg text-gray-500 flex justify-center mb-12">Welcome</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && 
                     postData.map(( post, index) => (
                        //mapping through the data to show the data we called before
                    <article key={index}>
                    <Link to={"/post/" + post.slug.current} key={post.slug.current}>

                        <span 
                        className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-purple-400"
                            key={index}
                        >
                            <img
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-center">
                                <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-600 text-blue-100 bg-opacity-75 rounded"> 
                                {post.title}
                                </h3>
                                </span>
                        </span>
                    </Link>
                </article>
                ))}
                </div>
            </section>
        </main>
    )
} 