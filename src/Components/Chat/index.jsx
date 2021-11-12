import React, { useState, useEffect } from "react";
import ChatlistItem from "../ChatListItem";
import ChatIntro from "../ChatIntro";
import ChatWindow from "../ChatWindow";
import NewChat from "../NewChat";
import Login from "../Login";
import Api from "../Api"
import { MdMessage } from "react-icons/md"
import { GrSearch } from "react-icons/gr"
import { Container, Chatlist, AvatarImage, Header, Search, SideContent, ButtonArea, HeaderBtn, SearchArea, InputSearch, ContentArea } from "./style";

export default function Chat() {
    const [chatlist, setChatlist] = useState([])
    
    const [activeChat, setActiveChat] = useState({})

    const [user, setUser] = useState(null)

    const [showUsers, setShowUsers] = useState(false)

    useEffect(() => {

        if (user !== null) {
            let unsub = Api.onChatList(user.id, setChatlist)
            return unsub
        }

    }, [user])

    const handleNewChat = () => {
        setShowUsers(true)
    }

    const handleLoginData = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        }

        await Api.addUser(newUser)

        setUser(newUser)
    }

    if (user === null) {
        return (<Login onReceive={handleLoginData} />)
    }

    return (
        <Container>
            <SideContent>
                <NewChat 
                    chatlist={chatlist}
                    user={user}
                    show={showUsers}
                    setShow={setShowUsers}
                />
                <Header>
                    <AvatarImage src={user.avatar} />

                    <ButtonArea>
                        <HeaderBtn onClick={handleNewChat}>
                            <MdMessage style={{color: '#0f1011'}}/>
                        </HeaderBtn>
                        
                    </ButtonArea>
                </Header>

                <Search>
                    <SearchArea>
                        <GrSearch fontSize="small" style={{color: '#919191'}}/>

                        <InputSearch type="search" placeholder="Pesquisar usuário"/>
                    </SearchArea>
                </Search>

                <Chatlist>
                    {chatlist.map((item, key) => (
                        <ChatlistItem 
                        key={key}
                        data={item}
                        onClick={() => setActiveChat(chatlist[key])}/>
                    ))}
                </Chatlist>

            </SideContent> 

            <ContentArea>

                {activeChat.chatId !== undefined && 
                    <ChatWindow 
                        user={user}
                        data={activeChat}
                />}
                {activeChat.chatId === undefined && <ChatIntro />}

            </ContentArea>

        </Container>
    )
}