import React from 'react';

import burgerLogo from '../../assets/images/logo.png';
import styles from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt="Burger.img"/>
        </div>
    );
};

export default logo;