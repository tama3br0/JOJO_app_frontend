import { useEffect, useState } from 'react';
import '../styles/Profile.module.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.log('Token not found');
                    return;
                }

                const response = await fetch('http://127.0.0.1:3000/api/mypage/1', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            {userData && (
                <div className="profile-container">
                    {userData.icon && <img src={userData.icon} alt="User Icon" style={{ width: '100px', height: '100px' }} />}
                    <p className="user-name">{userData.user_name}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;