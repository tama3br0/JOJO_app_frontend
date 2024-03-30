import { useEffect, useState } from "react";

const Profile = () => {
    const [userData, setUserData] = useState(null);

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
                    setUserData(data);
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h1>My Page</h1>
            {userData && (
                <div>
                    <p>User ID: {userData.user_name}</p>
                    <p>Icon: {userData.icon}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
