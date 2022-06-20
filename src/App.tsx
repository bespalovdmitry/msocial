import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {Route, Routes,} from 'react-router-dom';
import {Header} from './components/Header';
import {SideBar} from './components/SideBar';
import {Profile} from './components/profile/Profile';
import {Message} from './components/message/Message';
import {StorePropsType} from './types/types';

type AppPropsType = {
    store: StorePropsType
}
export const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <Box className="App" sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <SideBar/>
            <Routes>
                <Route path={'/*'} element={<Box sx={{margin: '0 auto', padding: '400px'}}>404</Box>}/>
                <Route
                    path={'/profile'}
                    element={<Profile
                        myPostsData={state.profilePage.myPostsData}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                <Route
                    path={'/message/*'}
                    element={<Message
                        friendsData={state.messagePage.friendsData}
                        friendMessageData={state.messagePage.friendMessageData}
                        myMessageData={state.messagePage.myMessageData}
                        dispatchAddMyMessage={props.store.dispatchAddMyMessage.bind(props.store)}
                    />}/>
            </Routes>
        </Box>
    )
}



