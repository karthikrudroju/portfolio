import React from "react";
import {Card, CardContent, Typography, Grid, CardMedia} from "@material-ui/core";
import styles from "./Projects.module.css";
import project1 from "../../img/COVID-19-Tracker.png";
import project2 from "../../img/Keeper-App.png";

function Projects() {
    return (
        <div id="projects" className={styles.container}>
            <h1 className={styles.heading}>Projects</h1>
            <Grid container spacing={4} justifyContent="center">
                <Grid item component={Card} xs={8} md={4} className={styles.project}>
                    <CardContent>
                        <Typography gutterBottom>
                            <a href="https://covid-19-api-kr.netlify.app/" target="_blank" >
                                <Typography className={styles.icon} color="textSecondary"><h5>Covid-19 API based application</h5></Typography>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={project1}
                                    alt="project"
                                />
                            </a>
                        </Typography>
                        <Typography variant="body1" gutterBottom>An application using HTML, CSS, Javascript and ReactJS</Typography>
                        <Typography variant="body1" gutterBottom>Retrieved data including total confirmed cases, deaths and recovered from covid-19 api using axios (npm package) which is a promise-based HTTP Client.</Typography>
                        <div className={styles.iconContainer}><a className={styles.icon} href="https://covid-19-api-kr.netlify.app/" target="_blank" ><i class="fas fa-globe fa-2x"></i></a>  <a className={styles.icon} href="https://github.com/karthikrudroju/covid-19-status-2" target="_blank" ><i class="fab fa-github fa-2x"></i></a></div>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={8} md={4} className={styles.project}>
                    <CardContent>
                        <Typography gutterBottom>
                            <a href="https://keeper-app-kr.netlify.app/" target="_blank" >
                                <Typography className={styles.icon} color="textSecondary" gutterBottom><h5>Note-taking Keeper application</h5></Typography>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={project2}
                                    alt="project"
                                />
                            </a>
                        </Typography>
                        <Typography variant="body1" gutterBottom>An application using HTML, CSS, Javascript and ReactJS</Typography>
                        <Typography variant="body1" gutterBottom>This Keeper application is based on Google Keep with simple features like adding and deleting notes.These notes have seperate heading and description.</Typography>
                        <div className={styles.iconContainer}><a className={styles.icon} href="https://keeper-app-kr.netlify.app/" target="_blank" ><i class="fas fa-globe fa-2x"></i></a>  <a className={styles.icon} href="https://github.com/karthikrudroju/keeper-app" target="_blank" ><i class="fab fa-github fa-2x"></i></a></div>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects;