import { Button, Drawer, TextField, Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {ChangeEvent, useEffect, useState } from "react";
import FormToAddNewDiary from "../../../Components/FormToAddNewDiary/FormToAddNewDiary";
import DiaryCard from "../../../Components/DiaryCard/DiaryCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { getEntry } from "../../../redux/slices/diaryReducer";


function SearchBar(){
  const dispatch = useDispatch();
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const diaryEntries = useSelector((state:RootState) => state.diary.entries);
  const user = useSelector((state:RootState) => state.user.nickname);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredEntries = diaryEntries.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  useEffect(()=>{
    dispatch(getEntry(user));
  },[user,dispatch])

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };


    return(
        <div 
        className="frame"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          position: "absolute",
          top: "179px",
          left: "60px",
          right: "60px",
          
        }}>
            <div 
            className="home"
            style={{
              display: "flex",
              height: "39px",
              flexDirection: "column",
              justifyContent: "center",
              color: "#4B465C",
              fontFamily: "Public Sans, sans-serif",
              fontFeatureSettings: "clig off, liga off",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 700,
   
            }}>
                Home
            </div>
            <div 
            className="search"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            
            }}
            >
                <TextField
                    placeholder="Placeholder"
                    className="search-bar"
                    style={{
                      width: "530px",
                      borderRadius: "8px",
                      border: "1px solid #DBDADE",
                      backgroundColor: "#FFFFFF",
                      padding: "0px"
                    }}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    InputProps={{
                        
                        startAdornment: (
                          <InputAdornment 
                            position="start"
                            className="search-box-inside"
                            style={{
                              width: "22px",
                              height: "22px",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "8px",
                              padding: "13px 16px"
                            }}
                          >
                            <SearchIcon 
                            className="search-icon"
                            style={{
                              width: "22px",
                              height: "22px",
                          
                            }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      
                />
                <div 
                className="submit-button"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px"
                }}
                >
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
              <FormToAddNewDiary onCloseOverlay={handleCloseOverlay} />
              
            </Drawer>   
            <Grid container spacing={2}>
        {filteredEntries.map((entry, index) => (
          <Grid item key={index}>
            <DiaryCard title={entry.title} description={entry.description} />
          </Grid>
        ))}
      </Grid>
     
        </div>
    );
}

export default SearchBar;