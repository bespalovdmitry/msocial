import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import {Header} from './components/Header';
import {SideBar} from './components/SideBar';
import {Profile} from './components/profile/Profile';
import {Message} from './components/message/Message';
import {RootType} from './types/types';

type AppPropsType = { state: RootType }
export const App  = (props: AppPropsType) => (
    <BrowserRouter>
        <Box className="App" sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <SideBar/>
            <Routes>
                <Route path={'/*'} element={<Box sx={{margin: '0 auto', padding: '400px'}}>404</Box>} />
                <Route
                    path={'/profile'}
                    element={<Profile
                        myPostsData={props.state.profilePage.myPostsData}
                    />}/>
                <Route
                    path={'/message/*'}
                    element={<Message
                        friendsData={props.state.messagePage.friendsData}
                        friendMessageData={props.state.messagePage.friendMessageData}
                    />}/>
            </Routes>
        </Box>


    </BrowserRouter>

);



