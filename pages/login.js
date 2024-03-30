import { useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../utils/auth";
import { ChakraProvider, Flex, Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import theme from '../styles/theme';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("AAA"); // ここに追加
        try {
            console.log("try"); // ここに追加
            const token = await loginUser(email, password);
            localStorage.setItem("token", token); //ログイン後にトークンを保存
            console.log("ログインに成功しました！ Token:", token);
            router.push("/");
        } catch (error) {
            console.log("errorA"); // ここに追加
            setError("パスワードまたはメールアドレスが違います");
            console.error("Login error:", error);
        }
    };

    return (
        <ChakraProvider theme={theme}>
            <Flex justify="center" align="center" height="100vh">
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    backgroundImage="url('https://i.ytimg.com/vi/LPHc8P5p494/maxresdefault.jpg')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    zIndex="-1" // 背景画像を一番後ろに配置するためのz-index
                />
                <Flex justify="center" align="center" height="100%">
                    <Box width="300px" p="6" bg="white" borderRadius="md" zIndex="1"> {/* フォームを前面に持ってくるためのz-index */}
                        <form onSubmit={handleSubmit}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl id="password" mt={4} isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </FormControl>
                            <Button mt={4} colorScheme="blue" type="submit" width="100%">
                                Sign in
                            </Button>
                        </form>
                    </Box>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
};

export default LoginPage;
