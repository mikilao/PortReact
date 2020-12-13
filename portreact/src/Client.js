import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "z6srao49" ,//found in sanity.json
    dataset: 'production'
})