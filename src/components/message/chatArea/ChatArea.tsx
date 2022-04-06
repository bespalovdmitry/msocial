import {Divider, Paper} from '@mui/material';
import Box from '@mui/material/Box';
import {ChatHeader} from './ChatHeader';
import {MessageFromFriend} from './MessageFromFriend';
import {ChatSendMessage} from './ChatSendMessage';
import React from 'react';
import {FriendMessageType} from '../../../types/types';

type ChatAreaPropsType = {
    friendMessageData: Array<FriendMessageType>
}
export const ChatArea = (props: ChatAreaPropsType) => {
    return (

        <Paper sx={{
            height: '100%',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Box>
                <ChatHeader/>
                <Divider sx={{mb: 2}}/>
                {props.friendMessageData.map((message) => {
                    return <MessageFromFriend key={message.id} friendName= {message.friendName} message={message.message} time={message.time}/>
                })}
            </Box>
            <Box>
                <Divider sx={{mb: 2}}/>
                <ChatSendMessage/>
            </Box>
        </Paper>
    );
};