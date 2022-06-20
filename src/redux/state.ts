import {v1} from 'uuid';
import Steven from '../media/Steven_Franklin.jpg';
import Adam from '../media/Adam_Miller.jpg';
import Mitchel from '../media/Mitchel_Givens.jpg';
import Stephan from '../media/Stephen_Hadley.jpg';
import {StorePropsType} from '../types/types';

const ADD_POST = 'ADD_POST';
const ADD_MY_MESSAGE = 'ADD_MY_MESSAGE';
export const addPostAC = (newPost: string) =>
    ({
        type: ADD_POST,
        newPost: newPost
    })
export const addMyMessageAC = (newMyMessage: string) =>
    ({
        type: ADD_MY_MESSAGE,
        newMyMessage: newMyMessage
    })

export const store: StorePropsType = {
    _state: {
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
                    friendName: 'Steven Frank',
                    lastMessage: 'Hey, how are you?',
                    lastMessageTime: '19 min ago',
                    avatar: Steven,
                    statusColor: '#33C38F',
                },
                {
                    id: v1(),
                    friendName: 'Adam Miller',
                    lastMessage: 'Nice to meet you',
                    lastMessageTime: '34 min ago',
                    avatar: Adam,
                    statusColor: '#74788D',
                },
                {
                    id: v1(),
                    friendName: 'Mitchel Givens',
                    lastMessage: 'See you so...?',
                    lastMessageTime: '1 hrs ago',
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
            ],
            myMessageData: [
                {id: v1(), friendName: 'Steven Franklin', message: 'Hello, how are you?', time: '11:13'},
            ]
        }
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    rerenderEntireTree(){
        console.log('State change')
    },
    dispatch (action) {
        if (action.type === 'ADD_POST') {
            this._state.profilePage.myPostsData = ([{id: v1(), postMessage: action.newPost, like: 0}, ...this._state.profilePage.myPostsData])
            this.rerenderEntireTree(this._state)
        }
    },
    dispatchAddMyMessage(action) {
        if (action.type === 'ADD_MY_MESSAGE') {
            this._state.messagePage.myMessageData = ([...this._state.messagePage.myMessageData, {id: v1(), friendName: 'Steven Franklin', message: action.newMyMessage, time: '11:13'}])
            this.rerenderEntireTree(this._state)
        }
    }
}