import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Checkbox} from "@mui/material";
import {FavoriteBorder} from "@mui/icons-material";

export default function Image({data, onUnFavourite}) {

    const breed = data.breeds[0] || {}
    const [favorite, setFavorite] = React.useState(data.favorite)

    async function handleFavoriteToggle() {
        const isFavoriting = !favorite;

        if (isFavoriting) {
            var rawBody = JSON.stringify({
                "image_id": data.id
            });

            const response = await fetch("https://api.thecatapi.com/v1/favourites", {
                method: "POST",
                headers: {"content-type": "application/json", 'x-api-key': process.env.REACT_APP_CAT_API_KEY},
                body: rawBody
            })
            const newFavorite = await response.json();
            setFavorite(newFavorite);
        } else {
            fetch(`https://api.thecatapi.com/v1/favourites/${favorite.id}`, {
                method: "DELETE",
                headers: {"content-type": "application/json", 'x-api-key': process.env.REACT_APP_CAT_API_KEY},
                body: rawBody
            })
            onUnFavourite(favorite.id)
            setFavorite(null);
        }
    }

    return (<Card sx={{margin: 2, maxWidth: 345}}>
        <CardHeader
            title={breed.name}
        />
        <CardMedia
            component="img"
            height="300"
            image={data.url}
            alt={breed.name}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {breed.temperament}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox onChange={handleFavoriteToggle} icon={<FavoriteBorder/>} checkedIcon={<FavoriteIcon/>}
                          checked={!!favorite}/>
            </IconButton>
        </CardActions>
    </Card>);
}
