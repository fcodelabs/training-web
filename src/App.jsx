import { AppBar, Container,Grid,Button,Toolbar } from '@material-ui/core';
import React from 'react';
import DiaryCard from './components/DiaryCard/DiaryCard';
function App(){
    return (
        <div>
            <AppBar position="absolute">
                <Toolbar/>
            </AppBar>
            
            <Container maxWidth="lg" style={{marginTop:'100px'}} >
                <Grid container spacing={4} >
                    <Grid item key={0} xs={12} sm={6} md={4}  >
                        <DiaryCard title="Titile-01" subtitle="Subtitle-01" description=" consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i" />
                    </Grid>
                    <Grid item key={1} xs={12} sm={6} md={4}>
                        <DiaryCard title="Titile-02" subtitle="Subtitle-02" description=" consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i"  />
                    </Grid>
                    <Grid item key={3} xs={12} sm={6} md={4}>
                        <DiaryCard title="Titile-03" subtitle="Subtitle-03" 
                        description=" consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default App;