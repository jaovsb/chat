import React, { useState, useEffect, useRef } from "react";
import Api from '../Api'
import { Btn, HeaderButtons, IconFooter, Info, InputArea, Name, Window, WindowBody, WindowFooter, WindowHeader } from "./style";
import { MdAttachFile } from "react-icons/md"
import { MdSend } from "react-icons/md"
import MessageItem from "../MessageItem";


export default function ChatWindow({user, data}) {
    const body = useRef()
    const [text, setText] = useState("")
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        
        setList([])

        let unsub = Api.onChatContent(data.chatId, setList, setUsers)

        return unsub

    }, [data.chatId])

    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])

    const handleKeyUp = (e) => {

        if (e.keyCode === 13) {
            handleSendClick()
        }

    }

    const handleSendClick = () => {
        
        if (text !== '') {
            Api.sendMessage(data, user.id, 'text', text, users)
            setText('')
        }

    }

    return (
        <Window>
            <WindowHeader>
                <Info>
                    <img src={data.image} alt="" />
                    <Name>{data.title}</Name>
                </Info>

                <HeaderButtons>
                    <Btn>
                       <MdAttachFile /> 
                    </Btn>

                </HeaderButtons>
            </WindowHeader>

            <WindowBody ref={body}>
                {list.map((item, key) => (
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </WindowBody>

            <WindowFooter>

                <InputArea>
                    <input 
                    type="text" 
                    placeholder="Digite uma mensagem"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyUp={handleKeyUp}
                    />
                </InputArea>

                <IconFooter>
                    <Btn onClick={handleSendClick}>
                        <MdSend />
                    </Btn>
                </IconFooter>
            </WindowFooter>
        </Window>
    )
}