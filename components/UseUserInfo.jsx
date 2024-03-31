import React from "react";
import UserData from "./UserData";
import styles from "@/styles/UserInfo.module.css";

const useUserInfo = () => {
    const { userIcon, userName } = UserData();

    console.log("ユーザーアイコン:", userIcon);
    return (
        <div className={styles.userInfoContainer}>
            {userIcon && (
                <img
                    src={`http://localhost:3001/icons/${userIcon}`}
                    alt="User Icon"
                    className={styles.userIcon}
                />
            )}
            {userName && <p className={styles.userName}>{userName}</p>}
        </div>
    );
};

export default useUserInfo;
