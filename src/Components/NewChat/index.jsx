import React, { useState, useEffect } from "react";
import { BackButton, Contacts, Head, HeadTitle, ItemName, NewConversation, NewConversationItem } from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai"
import Api from "../Api"

export default function NewChat({user, chatlis, show, setShow}) {
    const [list, setList] = useState([])

    useEffect(() => {
        const getList = async () => {
            if (user !== null) {
                let results = await Api.getContactList(user.id)
                setList(results)
            }
        }

        getList()

    }, [user])

    const addNewChat = async (user2) => {
        await Api.addNewChat(user, user2)

        handleClose()
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <NewConversation style={{left: show ? 0 : -415}}>
            <Head>
                <BackButton onClick={handleClose}>
                    <AiOutlineArrowLeft style={{color: '#fff'}}/>
                </BackButton>

                <HeadTitle>
                    Nova conversa
                </HeadTitle>
            </Head>

            <Contacts>
                {list.map((item, key) => (
                    <NewConversationItem
                    onClick={() => addNewChat(item)}
                    key={key}>
                        <img src={item.avatar} alt="" />

                        <ItemName>{item.name}</ItemName>
                    </NewConversationItem>
                ))}
            </Contacts>
        </NewConversation>
    )
}