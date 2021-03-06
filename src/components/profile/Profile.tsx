import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {Grid} from "@mui/material";
import {MyInfoCard} from "./MyInfoCard";
import {Chat} from "./chat/Chat";
import {AddPostActionType, MyPostType} from '../../types/types';

type ProfilePropsType = {
    myPostsData: Array<MyPostType>
    dispatch: (action: AddPostActionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: '#f6f6f9'}}>
            <Toolbar/>
            <Grid container spacing={2} sx={{backgroundColor: 'none'}}>
                <MyInfoCard/>
                <Chat
                    myPostsData={props.myPostsData}
                    dispatch={props.dispatch}
                />
            </Grid>
        </Box>
    );
};


