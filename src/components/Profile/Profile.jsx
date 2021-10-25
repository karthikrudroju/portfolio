import React from "react";
import Typical from "react-typical";
import {Button} from "@material-ui/core";
import styles from "./Profile.module.css";
import resume from "../../Resume/Resume.pdf";

function Profile() {
    return (
        <div className={styles.container}>  
            <div className={styles.parent}>
                <div className="details"> 
                    <div className={styles.name}>
                        <h3 className="primary-text">
                            Hello, I'm <span className="highlighted-text">Karthik</span>
                        </h3>
                    </div>
                    <div className={styles.role}>
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
                                    ]}
                                />
                            </h1>
                            <span>
                                Have the ability to build remarkable web applications.
                            </span>
                        </span>
                    </div>
                    <div className={styles.resume}>
                        <a href={resume} title="Resume" download>
                            <Button variant="outlined" className="btn">
                                Get Resume
                            </Button>
                        </a>
                    </div>
                    <div><a className={styles.downicon} href="#aboutme"><i class="fas fa-arrow-down fa-3x"></i></a></div>
                </div>
            </div>
        </div>
    );
}

export default Profile