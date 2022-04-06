import {IconButton, InputBase, Paper} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";

export const ChatSendMessage = () => {
    return (
        <Paper component="form" sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '40px',
            mb: 1,
            backgroundColor: '#EFF2F6'
        }}>
            <InputBase
                sx={{ml: 1, flex: 1, backgroundColor: '#EFF2F6'}}
                placeholder="Enter message"
            />
            <IconButton sx={{p: '10px'}} color={'primary'}>
                <SendIcon/>
            </IconButton>
        </Paper>
    );
};