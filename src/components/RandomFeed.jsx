import React from 'react';
import {Grid} from "@mui/material";

const Feed = () => {

    const [images, setImages] = React.useState([]);

    async function refreshImages() {
        setImages([])

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12', {headers: {'x-api-key': process.env.REACT_APP_CAT_API_KEY}});
            const json = await response.json();
            setImages(json);
        } catch (e) {
            console.log(e);
        }
    }

    return (
            <Grid container columns={{xs:4, sm:8, md:12}}>
                {
                    images && images.map(image => (
                            <Image data={image} key={image.id}/>
                    ))
                }
            </Grid>
    );
}

export default Feed;
