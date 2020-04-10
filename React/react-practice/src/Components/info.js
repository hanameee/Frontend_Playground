import React from "react";
import useInfo from "../Hooks/useInfo";

const Info = () => {
    const { name, nickname, onNameChange, onNicknameChange } = useInfo();
    return (
        <div>
            <input
                value={name}
                placeholder="이름을 입력해주세여"
                onChange={onNameChange}
            />
            <input
                value={nickname}
                placeholder="별명을 입력해주세여"
                onChange={onNicknameChange}
            />
            <div>
                <div>
                    <b>이름: </b>
                    {name}
                </div>
                <div>
                    <b>별명: </b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
