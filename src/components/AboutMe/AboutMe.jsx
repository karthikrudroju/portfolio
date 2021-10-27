import React from "react";
import styles from "./AboutMe.module.css";
import {Grid, Container} from "@material-ui/core";
import imageURL from "../../img/profile.jpg"

function AboutMe() {
    return (
        <Container id="aboutme" className={styles.container}>
            <h1 className={styles.heading}>About Me</h1>
            <Grid container spacing={4} justifyContent="center">
                <Grid item  xs={12} md={4} lg={3} className={styles.img}>
                    <img className={styles.image}  src={imageURL} alt="profile-picture"/>
                </Grid>
                <Grid item  xs={12} md={8} className={styles.details}>
                    Hi, Myself Karthik Rudroju.<br /> I am a Computer Science Engineering undergraduate at National Institute of Technology, Raipur. <br />
                    I'm a Web developer and I am currently exploring other web technologies like blockchain and cloud technology. <br />
                    I do competitive programming on platforms like <a href="https://www.codechef.com/users/karthik_0018" target="_blank">codechef:karthik_0018</a> and <a href="https://codeforces.com/profile/Karthik_Rudroju" target="_blank">codeforces:karthik_rudroju</a>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutMe;