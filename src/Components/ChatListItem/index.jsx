import React, { useState, useEffect} from "react";
import { AvatarTalk, ChatTalk, ChatTalkLines, LastMsg, Line, MsgDate, UserName } from "./style";

export default function ChatlistItem({onClick, data}) {

    const [time, setTime] = useState('')

    useEffect(() => {

        if (data.lastMessageDate > 0) {
            if (data.lastMessageDate > 0) {
                let d = new Date(data.lastMessageDate.seconds * 1000)

                let hours = d.getHours()

                let minutes = d.getMinutes()
                hours = hours < 10 ? '0'+hours : hours
            
                minutes = minutes < 10 ? '0'+minutes : minutes

                setTime(`${hours}:${minutes}`)
            }
            
        }

    }, [data])

    return (
        <ChatTalk onClick={onClick}
        >
            <AvatarTalk src={data.image}/>

            <ChatTalkLines>

                <Line>
                    <UserName>{data.title}</UserName>
                    <MsgDate>{time}</MsgDate>
                </Line>

                <Line>
                    <LastMsg>
                       {data.lastMessage}
                    </LastMsg>
                </Line>

            </ChatTalkLines>

        </ChatTalk>
    )
}