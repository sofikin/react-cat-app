import './App.css';
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar"
import Feed from "./components/RandomFeed";
import FavoritesFeed from "./components/FavoritesFeed";
import {useState} from "react";

function App() {

    const [showFavorites, setShowFavorites] = useState(false);

  return (
    <Box>
      <NavBar onModeChange={setShowFavorites}></NavBar>
        {!!showFavorites? <FavoritesFeed/> : <Feed></Feed>}
    </Box>
  )
}

export default App;
