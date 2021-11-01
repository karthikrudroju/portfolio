import { Typography, Grid, Card, CardContent } from '@material-ui/core'
import styles from "./Skills.module.css"
import React from 'react'

function Skills() {
    return (
        <div id="skills" className={styles.container}>
            <h1 className={styles.heading}>Skills</h1>
            <Grid container spacing={4} justifyContent="center">
                <Grid item component={Card} xs={6} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.box}>
                            <div className={styles.iconContainer}><i class="fab fa-html5 fa-5x"></i></div>
                            <Typography color="textSecondary" gutterBottom><h5>HTML</h5></Typography>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={6} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.box}>
                            <div className={styles.iconContainer}><i class="fab fa-css3-alt fa-5x"></i></div>
                            <Typography color="textSecondary" gutterBottom><h5>CSS</h5></Typography>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={6} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.box}>
                            <div className={styles.iconContainer}><i class="fab fa-js fa-5x"></i></div>
                            <Typography color="textSecondary" gutterBottom><h5>JavaScript</h5></Typography>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={6} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.box}>
                            <div className={styles.iconContainer}><i class="fab fa-react fa-5x"></i></div>
                            <Typography color="textSecondary" gutterBottom><h5>React</h5></Typography>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={6} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.box}>
                            <div className={styles.iconContainer}><i class="fab fa-node fa-5x"></i></div>
                            <Typography color="textSecondary" gutterBottom><h5>Node</h5></Typography>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={6} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.box}>
                            <div className={styles.iconContainer}><i class="fas fa-database fa-5x"></i></div>
                            <Typography color="textSecondary" gutterBottom><h5>Databases</h5></Typography>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={6} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.box}>
                            <div className={styles.iconContainer}><i class="fab fa-git-alt fa-5x"></i></div>
                            <Typography color="textSecondary" gutterBottom><h5>Version control</h5></Typography>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={6} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.box}>
                            <div className={styles.iconContainer}><i class="fab fa-python fa-5x"></i></div>
                            <Typography color="textSecondary" gutterBottom><h5>Python</h5></Typography>
                        </div>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skills
