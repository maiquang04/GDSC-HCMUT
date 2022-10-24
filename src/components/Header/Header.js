import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Header.css";

import { LiveTv, People, Search } from "@material-ui/icons";

const Header = () => {
  const history = useHistory()
  
  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box flexGrow={1}>
              <span onClick={() => window.scroll(0, 0)} className="app_title">
                <Typography variant="h6" component="div">
                  📺 TV & CHILL🍿
                </Typography>
              </span>
            </Box>
            
            <Button color="inherit" onClick={() => history.push("/")} startIcon={<LiveTv/>}>Shows</Button>
            <Button color="inherit" onClick={() => history.push("/people")} startIcon={<People/>}>People</Button>
            <Button color="inherit" onClick={() => history.push("/search")} startIcon={<Search/>}>Search</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
};

export default Header;
