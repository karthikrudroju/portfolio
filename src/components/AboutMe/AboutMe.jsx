import React from "react";
import styles from "./AboutMe.module.css";
import imageURL from "../../img/profile.jpg"

function AboutMe() {
    return (
        <div id="aboutme" className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.heading}>
                    <h1>About Me</h1>
                </div>
                <img className={styles.image} src={imageURL} alt="profile-picture" />
                <div className={styles.details}>
                    Hi, Myself Karthik Rudroju.<br /> I am a Computer Science undergraduate at National Institute of Technology, Raipur. <br />
                    I'm a Web developer and I am currently exploring other web technologies like blockchain and cloud technology. <br />
                    I do competitive coding on platforms like codechef <a href="https://www.codechef.com/users/karthik_0018">karthik_0018</a> and codeforces <a href="https://codeforces.com/profile/Karthik_Rudroju">karthik_rudroju</a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;