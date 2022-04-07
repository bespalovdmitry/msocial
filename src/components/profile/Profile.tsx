import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {Grid} from "@mui/material";
import {MyInfoCard} from "./MyInfoCard";
import {Chat} from "./chat/Chat";
import {MyPostType} from '../../types/types';

type ProfilePropsType = {
    myPostsData: Array<MyPostType>
    addPost: (newPost: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: '#f6f6f9'}}>
            <Toolbar/>
            <Grid container spacing={2} sx={{backgroundColor: 'none'}}>
                <MyInfoCard/>
                <Chat
                    myPostsData={props.myPostsData}
                    addPost={props.addPost}
                />
            </Grid>
        </Box>
    );
};


