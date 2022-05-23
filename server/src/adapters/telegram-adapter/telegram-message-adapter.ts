import axios from 'axios';

import { MessageAdapter, sendMessageData } from "../message-adapter";

export class TelegramMessageAdapter implements MessageAdapter{
    async sendMessage({type, body}: sendMessageData) {
        let message = '<b>Tipo de feedback</b>: '+type;
        message += '\n';
        message += '<b>Comentário</b>: '+body;
        message = encodeURI(message);
    
        await axios.get(`https://api.telegram.org/bot5305574180:AAHL5GW5MrHAnLg21lS0_7J2mcDUepF2r-o/sendMessage?chat_id=1441354120&text=${message}&parse_mode=html`)
        .catch( err => console.log(err));
    }
}