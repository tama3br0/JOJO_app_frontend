import { useState, useEffect } from 'react';
import { ChakraProvider, Flex, Box, Text, Button } from '@chakra-ui/react';
import Header from "../components/header";
import MyPost from '../components/MyPost';
import Favorites from '../components/Favorites';

const MyPage = () =>  {
    const [selectedTad, setSelectedTad] = useState('MyPost');
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

    const handleTadChange = (tab) => {
        setSelectedTad(tab);
    };

    return (
        <ChakraProvider>
            <Header /> {/* ヘッダーコンポーネントの表示 */}
            <Flex direction="column" align="center">
                <Flex justify="space-between" width="80%" my="4">
                    <Flex align="center">
                        <Box boxSize="50px" bg="gray.200" borderRadius="full" mr="4">
                            {userIcon && <img src={userIcon} alt="User Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
                        </Box>
                        <Text fontSize="lg">{userName}</Text>
                    </Flex>
                    <Flex>
                        {/* タブ切り替えボタン */}
                        <Button
                            variant={selectedTad === 'MyPost' ? 'solid' : 'outline'}
                            colorScheme="blue"
                            onClick={() => handleTadChange('MyPost')}
                            mr="2"
                        >
                            MyPost
                        </Button>
                        <Button
                            variant={selectedTad === 'Favorite' ? 'solid' : 'outline'}
                            colorScheme="blue"
                            onClick={() => handleTadChange('Favorite')}
                        >
                            Favorite
                        </Button>
                    </Flex>
                </Flex>
                {/* 棒線 */}
                <Box width="80%" borderBottom="1px solid black" my="4" />
                {/* タブコンテンツ */}
                {selectedTad === 'MyPost' && <MyPost posts={userPosts} />}
                {selectedTad === 'Favorite' && <Favorites />}
            </Flex>
        </ChakraProvider>
    );
};

export default MyPage;