import { useState, useEffect } from "react";

const useInfo = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const onNameChange = e => {
        setName(e.target.value);
    };
    const onNicknameChange = e => {
        setNickname(e.target.value);
    };
    useEffect(() => {
        console.log("useEffect - name: ", name);
        return () => {
            // 언마운트 되기 직전에 실행됨
            console.log("Cleanup function - name: ", name);
        };
    });
    return {
        name,
        nickname,
        onNameChange,
        onNicknameChange
    };
};

export default useInfo;
