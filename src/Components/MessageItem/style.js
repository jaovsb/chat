import styled from "styled-components";

export const MessageLine = styled.div`
    margin-bottom: 10px;
    display: flex;
`;

export const Message = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 1px #ccc;
    display: flex;
    flex-direction: column;
    padding: 3px;
    max-width: 90%;
`;

export const TextMsg = styled.div`
    font-size: 14px;
    margin: 5px 40px 5px 5px;
`;

export const DateMsg = styled.div`
    font-size: 11px;
    color: #fff;
    margin-right: 5px;
    text-align: right;
    margin-top: -15px;
`;