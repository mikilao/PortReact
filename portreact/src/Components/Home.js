import React from 'react';
import image from '../sunset.JPG';

export default function Home(){
    return(
        <main>
            <img src={image} alt="Sunset in cancun" className="absolute object-cover w-full h-full" />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-6xl text-yellow-300 text-center font-bold cursive leading-none lg:leading-snug home-name">Welcome to Rachel, Nice to meet you! </h1>
        </section>
        
        </main>
    )
} 