import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                    <div className={styles.details}>
                        <a className={styles.icons} href="https://www.linkedin.com/in/rudroju-karthik-ab030a1b5/"><i className="fab fa-linkedin fa-lg"></i></a>
                        <a className={styles.icons} href="https://github.com/karthikrudroju"><i className="fab fa-github fa-lg"></i></a>
                        <a className={styles.icons} href="https://www.instagram.com/karthik__019/"><i className="fab fa-instagram fa-lg"></i></a>
                    </div>
                    <div className={styles.details}>
                        <a href="#"><i className="fas fa-envelope"></i> karthikrudroju@gmail.com</a>
                    </div>
                    <div className={styles.details}>
                        <a href="#"><i className="fas fa-phone"></i> 9121630546</a>
                    </div>
            </div>
        </div>
    );
}

export default Footer;