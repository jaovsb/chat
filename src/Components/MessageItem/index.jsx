import React, {useState, useEffect} from "react";
import { MessageLine, Message, TextMsg, DateMsg } from "./style";

export default function MessageItem({data, user}) {

    const [time, setTime] = useState('')

    useEffect(() => {
        if (data.date > 0) {
            let d = new Date(data.date.seconds * 1000)

            let hours = d.getHours()

            let minutes = d.getMinutes()

            hours = hours < 10 ? '0'+hours : hours

            minutes = minutes < 10 ? '0'+minutes : minutes
            
            setTime(`${hours}:${minutes}`)
        }
        
    }, [data])

    return (
        <MessageLine
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
            <Message
                style={{
                    backgroundColor: user.id === data.author ? '#9277ff' : "#66cdc2"
                }}
            >
                <TextMsg>{data.body}</TextMsg>
                <DateMsg>{time}</DateMsg>
            </Message>
        </MessageLine>
    )
}