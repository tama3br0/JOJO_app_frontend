import { useState, useEffect } from "react";

const UserData = () => {
    const [userIcon, setUserIcon] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.log("Token not found");
                    return;
                }

                const response = await fetch(
                    "http://localhost:3000/api/mypage/1",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    console.log("dataの中身:", data); // データの内容をコンソールに出力

                    // setUserIcon(data.icon);
                    setUserIcon(data.icon.replace(/^\/icons\//, "")); // /icons/ の部分を空文字列に置換することで、画像名(例: 01.png)のみを取得する
                    setUserName(data.user_name);
                    setUserPosts(data.posts);
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return { userIcon, userName, userPosts };
};

export default UserData;
