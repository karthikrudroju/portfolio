import React from "react";
import Typical from "react-typical";
import {Button} from "@material-ui/core";
import styles from "./Profile.module.css";
import resume from "../../Resume/Resume.pdf";

function Profile() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileParent}>
                <h3>Hello, I'm Karthik</h3>
                <div>
                    <Typical
                        loop={Infinity}
                        steps={[
                            "Computer Science Student",
                            1000,
                            "Full Stack MERN developer",
                            1000,
                            "Blockchain Ethusiast",
                            1000,
                        ]}
                    />
                </div>
                <p className={styles.text}>Have the ability to build remarkable web applications.</p>
            </div>
        </div>
    );
}

export default Profile