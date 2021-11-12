import styled from "styled-components";

export const Window = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const WindowHeader = styled.header`
    height: 60px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #9277ff;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 15px;
        margin-right: 15px;
    }
`;

export const Name = styled.div`
    font-size: 17px;
    color: #000;
`;

export const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
`;

export const Btn = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const WindowBody = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: #e5ddd5;
    background-size: cover;
    background-position: center;
    padding: 20px 30px;

    &::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.2);
    }
`;

export const WindowFooter = styled.footer`
    height: 62px;
    display: flex;
    align-items: center;
    background-color: #9277ff;
`;

export const InputArea = styled.div`
    flex: 1;
    margin-left: 15px;

    input {
        width: 100%;
        height: 40px;
        border: 0;
        outline: 0;
        background-color: #fff;
        border-radius: 20px;
        font-size: 15px;
        color: #4a4a4a;
        padding-left: 15px;
    }
`;

export const IconFooter = styled.div`
    display: flex;
    margin: 0 15px;
`;