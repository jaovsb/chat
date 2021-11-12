import styled from "styled-components";

export const ChatTalk = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 70px;

    &:hover {
        background-color: #f5f5f5;
    }

    @media (max-width: 520px) {
        flex-direction: column;
    }
`;

export const AvatarTalk = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-left: 15px;
`;

export const ChatTalkLines = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #eee;
    padding-right: 15px;
    margin-left: 15px;
    flex-wrap: wrap;
    min-width: 0;
`;

export const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const UserName = styled.div`
    font-size: 17px;
    color: #000;
`;

export const MsgDate = styled.div`
    font-size: 12px;
    color: #999;
`;

export const LastMsg = styled.div`
    font-size: 14px;
    color: #999;
    display: flex;
    width: 100%;

    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
    }
`;