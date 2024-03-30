import { useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../utils/auth";
import styles from "../styles/Login.module.css";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
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
        <div className={styles["login-container"]}>
            <div className={styles["logo-container"]}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </div>
            <form className={styles["login-form"]} onSubmit={handleLogin}>
                <div className={styles["form-group"]}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        required
                    />
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        required
                    />
                </div>

                <button type="submit">ウリイイイイヤアアアッー</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
