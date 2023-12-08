import "./SearchBar.css";
import { Button, Drawer, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import FormToAddNewDiary from "../../../Components/FormToAddNewDiary/FormToAddNewDiary";



function SearchBar(){
  const [showOverlay, setShowOverlay] = useState(false);

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };


    return(
        <div className="frame">
            <div className="home">
                Home
            </div>
            <div className="search">
                <TextField
                    placeholder="Placeholder"
                    className="search-bar"
                    InputProps={{
                        
                        startAdornment: (
                          <InputAdornment 
                            position="start"
                            className="search-box-inside"
                          >
                            <SearchIcon className="search-icon" />
                          </InputAdornment>
                        ),
                      }}
                      
                />
                <div className="submit-button">
                <Button 
                    type="submit" 
                    variant="contained" 
                    className="button"
                    onClick={handleButtonClick}
                    style={{
                        padding: "13px, 26px",
                        borderRadius: "8px",
                        background: "#0092DD",
                        color: '#FFFFFF',
                        fontFamily: "public sans, sans-serif",
                        fontSize: "17px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        lineHeight: "22px",
                        letterSpacing: "0.43px",
                        textTransform: "none"
                      }}
                    >    
                    Submit new
                </Button>
                </div>
            </div>  
            <Drawer
            anchor="right"
            open={showOverlay}
            onClose={handleCloseOverlay}
            >
              <FormToAddNewDiary onCloseOverlay={handleCloseOverlay}/>
            </Drawer>        
        </div>
    );
}

export default SearchBar;