import {addMyMessageAC, addPostAC} from '../redux/state';

export type StorePropsType = {
    _state: RootType
    // addPost: (newPost: string) => void
    subscribe: (observer: (state: RootType) => void) => void
    rerenderEntireTree: (state: RootType) => void
    getState: () => RootType
    dispatch: (action: AddPostActionType) => void
    dispatchAddMyMessage: (action: AddMyMessageActionType) => void
}
export type RootType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}
export type MessagePageType = {
    friendsData: Array<FriendType>
    friendMessageData: Array<MessageType>
    myMessageData: Array<MessageType>
}
export type ProfilePageType = {
    myPostsData: Array<MyPostType>
}
export type MessageType = { id: string, friendName: string, message: string, time: string }
export type FriendType = { id: string, friendName: string, lastMessage: string, lastMessageTime: string, avatar: string, statusColor: string }
export type MyPostType = { id: string, postMessage: string, like: number }
export type AddPostActionType = ReturnType<typeof addPostAC>
export type AddMyMessageActionType = ReturnType<typeof addMyMessageAC>
