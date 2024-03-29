import Header from "../components/header";
import Profile from '../components/Profile';
import MyPhoto from '../components/MyPhoto';
import Favorites from '../components/Favorites';
import { useState } from 'react';
import styles from '../styles/MyPage.module.css';

const MyPage = () =>  {
    const [selectedTad, setSelectedTad] = useState('MyPhoto');

    const handleTadChange = (tab) => {
        setSelectedTad(tab);
    };

    return (
        <div>
            <Header />
            <Profile />
            <div className={styles.container}>
                <div className={styles['tab-buttons']}>
                    <button className={`${styles['tab-button']}`} onClick={() => handleTadChange('MyPhoto')}>MyPhoto</button>
                    <button className={`${styles['tab-button']}`} onClick={() => handleTadChange('Favorite')}>Favorite</button>
                </div>
                <div className={styles['tab-content']}>
                    {setSelectedTad === 'MyPhoto' && <MyPhoto />}
                    {setSelectedTad === 'Favorite' && <Favorites />}
                </div>
            </div>
            <div className={styles['separator-container']}>
                <div className={styles.separator}></div>
            </div>
        </div>
    );
};

export default MyPage;