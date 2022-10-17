import './App.css';
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar"
import Feed from "./components/RandomFeed";

function App() {
  return (
    <Box className="App">
      <NavBar></NavBar>
        <Feed></Feed>
    </Box>
  );
}

export default App;
