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

export default function Image({data}) {

    const breed = data.breeds[0] || {};
    const [favorite, setFavorite] = React.useState(data.favorite)
    const handleFavoriteToggle = () => {
        setFavorite(!favorite)
    }

    return (
        <Card sx={{ margin: 2, maxWidth: 345 }}>
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
                    <Checkbox icon={<FavoriteBorder/>} checkedIcon={<FavoriteIcon/>} checked={!!favorite}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
