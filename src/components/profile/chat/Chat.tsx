import {Grid} from '@mui/material';
import React from 'react';
import {SendPost} from './SendPost';
import {MyPost} from './MyPost';
import {v1} from 'uuid';
import {AddPostActionType, MyPostType} from '../../../types/types';

type ChatPropsType = {
    myPostsData: Array<MyPostType>
    dispatch: (action: AddPostActionType) => void
}

export const Chat = (props: ChatPropsType) => {

    return (
        <Grid item xs={8}>
            <SendPost dispatch={props.dispatch}/>
            {props.myPostsData.map(post => <MyPost key={v1()} post={post}/>)}
        </Grid>
    );
};

