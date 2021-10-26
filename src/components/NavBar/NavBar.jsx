import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <div id="navbar" className={styles.container}>
            <div className={styles.nav}>
            <input type='checkbox' id="check" />
                <label for="check">
                    <div className={styles.btn}><i class="fas fa-bars fa-2x"></i></div>
                    <div className={styles.cancel}><i class="fas fa-times fa-2x"></i></div>
                </label>
                <ul>
                    <li><a href="#contact" className={styles.link}>Contact</a></li>
                    <li><a href="#projects" className={styles.link}>Projects</a></li>
                    <li><a href="#aboutme" className={styles.link}>About</a></li>
                    <li><a href="#" className={styles.link}>Home</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;