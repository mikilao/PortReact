import React, { useEffect, useState } from 'react';
import sanityClient from '../Client';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
          .fetch(
            `*[slug.current == '${slug}']{
                 title,
                 _id,
                 slug,
                 mainImage{
                   asset->{
                     _id,
                     url
                   }
                 },
                 body,
                 'name': author->name,
                 'authorImage': author->image
            }`
          )
          .then((data) => setSinglePost(data[0]))
          .catch((error) => console.log(error));
      }, [slug]);

    if (!singlePost) return <div>Loading...</div> // in case there is no post
    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container chadow-lg mx-auto bg-green-100 rounded">
                <header className="relative">
                    <div className="absolute h-full h-full flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12 ">

                            <h1 className="cursive text-3xl lg:text-6xl mb-4">{singlePost.title}
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                <img className="w-10 h-10 rounded-full"
                                    src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name} />
                            </div>
                            <p className="cursive flex items-center pl-3 text-2xl">
                                {singlePost.name}
                            </p>
                        </div>
                    </div>
                    <img
                        src={singlePost.mainImage.asset.url}
                        alt={singlePost.title}
                        className="w-full object-cover rounded-t"
                        style={{ height: "400px" }} />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    
                    <BlockContent blocks={singlePost.body} projectId="z6srao49" dataset="production" />
                </div>
            </article>
        </main>
    );


} 