import React from "react";
import Api from "../Api";
import { SignIn } from "./style";

export default function Login({onReceive}) {
    const handleLogin = async () => {
        let result = await Api.fbPopup()

        if (result) {
            onReceive(result.user)
        } else {
            alert("ERRO!")
        }
    }

    return (
        <SignIn>
            <button onClick={handleLogin}>Entrar</button>
        </SignIn>
    )
}