import styled from "styled-components";

export const NewConversation = styled.div`
    width: 35%;
    max-width: 415px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ddd;
    transition: all ease 0.5s;
`;

export const Head = styled.div`
    display: flex;
    background-color: #9277ff;
    align-items: center;
    padding: 60px 15px 15px 15px;

    @media (max-width: 520px) {
        flex-direction: column;
    }
`;

export const BackButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeadTitle = styled.div`
    font-size: 19px;
    height: 40px;
    line-height: 40px;
    flex: 1;
    font-weight: bold;
    color: #fff;
    margin-left: 20px;

    @media (max-width: 615px) {
        font-size: 13px;
    }
`;

export const Contacts = styled.div`
    flex: 1;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.2);
    }

`;

export const NewConversationItem = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
    }

    &:hover {
        background-color: #f5f5f5;
    }

    @media (max-width: 520px) {
        flex-direction: column;
        padding: 5px;
    }
`;

export const ItemName = styled.div`
    font-size: 17px;
    color: #000;
`;