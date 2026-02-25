import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
    
    return (
        <div>
            <nav className={styles.navbar}>
                <h2 className={styles.logo}>RentEverything</h2>
                <div className={styles.navLinks}>
                    <a href="#">Explore</a>
                    <a href="#">List Item</a>
                    <a href="#">Login</a>
                    <button className={styles.primaryBtn}>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}
