import React, {useEffect} from 'react';
import {CircularProgress, Grid} from "@mui/material";
import Image from "./Image";
import Box from "@mui/material/Box";

const FavoritesFeed = () => {

    const [images, setImages] = React.useState([]);

    async function onImageUnfavorited(favoriteId) {
        setImages(images.filter(image => image.favorite.id !== favoriteId))
    }

    async function refreshImages() {
        setImages([])

        try {
            const response = await fetch('https://api.thecatapi.com/v1/favourites?order=DESC', {
                headers: {
                    "content-type": "application/json", 'x-api-key': process.env.REACT_APP_CAT_API_KEY
                }
            });
            const json = await response.json();

            const mapped = json.map(favorite => {
                return {
                    id: favorite.image.id, url: favorite.image.url, favorite, breeds: []
                }
            })

            setImages(mapped);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        refreshImages();
    }, [])

    return (
        <>
            <Grid container columns={{xs: 4, sm: 8, md: 12}}>
        {images && images.map(image => (
            <Grid item key={image.id} xs={2} sm={4} md={4}>
                <Image data={image} key={image.id} onUnFavourite={onImageUnfavorited}/>
            </Grid>))}
            </Grid>
    <Box textAlign={'center'}>
        {images.length === 0 && <CircularProgress/>}
    </Box>
        </>
);
}

export default FavoritesFeed;