import { useState, useEffect } from 'react';

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
                    setUserIcon(data.icon);
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