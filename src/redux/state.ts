import {v1} from 'uuid';
import Steven from '../media/Steven_Franklin.jpg';
import Adam from '../media/Adam_Miller.jpg';
import Mitchel from '../media/Mitchel_Givens.jpg';
import Stephan from '../media/Stephen_Hadley.jpg';
import {RootType} from '../types/types';

export const state: RootType = {
    profilePage: {
        myPostsData: [
            {id: v1(), postMessage: 'Hello my friends!', like: 45},
            {id: v1(), postMessage: 'This is my first post', like: 32},
        ],
    },
    messagePage: {
        friendsData: [
            {
                id: v1(),
                friendName: 'Steven Franklin',
                lastMessage: 'Hey, how are you?',
                lastMessageTime: '19 minutes ago',
                avatar: Steven,
                statusColor: '#33C38F',
            },
            {
                id: v1(),
                friendName: 'Adam Miller',
                lastMessage: 'Nice to meet you',
                lastMessageTime: '34 minutes ago',
                avatar: Adam,
                statusColor: '#74788D',
            },
            {
                id: v1(),
                friendName: 'Mitchel Givens',
                lastMessage: 'See you so...?',
                lastMessageTime: '1 hour ago',
                avatar: Mitchel,
                statusColor: '#33C38F',
            },
            {
                id: v1(),
                friendName: 'Stephan Jang',
                lastMessage: 'I\'m available',
                lastMessageTime: '3 hrs ago',
                avatar: Stephan,
                statusColor: '#F1B34C',
            }
        ],
        friendMessageData: [
            {id: v1(), friendName: 'Steven Franklin', message: 'Hello, how are you?', time: '11:13'},
            {id: v1(), friendName: 'Steven Franklin', message: 'We can meet tomorrow?', time: '17:32'},
            {id: v1(), friendName: 'Steven Franklin', message: 'Okay?', time: '19:42'},
        ]
    }
}