export interface sendMessageData {
    type: string;
    body: string;
}

export interface MessageAdapter {
    sendMessage: (data: sendMessageData) => Promise<void>;
}