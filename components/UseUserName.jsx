import React from "react";
import UserData from "./UserData";
import styles from "@/styles/UserInfo.module.css";

const useUserName = () => {
    const { userName } = UserData();

    return (
        <div className={styles.userInfoContainer}>
            {userName && <p className={styles.userName}>{userName}</p>}
        </div>
    );
};

export default useUserName;
