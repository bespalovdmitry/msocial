export type RootType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}
export type MessagePageType = {
    friendsData: Array<FriendType>
    friendMessageData: Array<FriendMessageType>
}
export type ProfilePageType = {
    myPostsData: Array<MyPostType>
}
export type FriendMessageType = { id: string, friendName: string, message: string, time: string }
export type FriendType = { id: string, friendName: string, lastMessage: string, lastMessageTime: string, avatar: string, statusColor: string }
export type MyPostType = { id: string, postMessage: string, like: number }