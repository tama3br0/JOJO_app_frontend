import { useRouter } from 'next/router';
import logout from '../pages/logout'; // Logout関数をインポート
import styles from '../styles/Header.module.css';

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await logout(); // Logout関数を呼び出す
    };

    return (
        <button className={styles.rightButton} onClick={handleLogout}>逃げるんだよォ！</button>
    );
};

export default LogoutButton;