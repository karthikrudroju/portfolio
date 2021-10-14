import React from "react";
import Typical from "react-typical";
import {Button} from "@material-ui/core";
import styles from "./Profile.module.css";
import profileImage from "../../img/profile.png";

function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                        Navigation Bar
            </div>
            <img class={styles.image} src={profileImage} alt="profile-img" />
            <div className={styles.parent}>
                <div className="details">
                    
                    <div className="name">
                        <span className="primary-text">
                            Hello, I'm <span className="highlighted-text">Karthik</span>
                        </span>
                    </div>
                    <div className="role">
                        <span className="primary-text">
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Computer Science Student",
                                        1000,
                                        "Full Stack MERN developer",
                                        1000,
                                        "Blockchain Ethusiast",
                                        1000,
                                        "Technology MAD",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span>
                                Have the ability to build Full Stack MERN applications.
                            </span>
                        </span>
                    </div>
                    <div className={styles.resume}>
                        <a>
                            <Button variant="outlined" className="btn">
                                Get Resume
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile