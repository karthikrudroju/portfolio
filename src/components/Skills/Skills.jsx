import { Typography, Grid, Card, CardContent } from '@material-ui/core'
import styles from "./Skills.module.css"
import React from 'react'

function Skills() {
    return (
        <div id="projects" className={styles.container}>
            <h1 className={styles.heading}>Skills</h1>
            <Grid container spacing={4} justifyContent="center">
                <Grid item component={Card} xs={12} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.iconContainer}><i class="fab fa-html5 fa-5x"></i></div>
                        <Typography color="textSecondary" gutterBottom><h5>HTML</h5></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.iconContainer}><i class="fab fa-css3-alt fa-5x"></i></div>
                        <Typography color="textSecondary" gutterBottom><h5>CSS</h5></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.iconContainer}><i class="fab fa-js fa-5x"></i></div>
                        <Typography color="textSecondary" gutterBottom><h5>JavaScript</h5></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.iconContainer}><i class="fab fa-react fa-5x"></i></div>
                        <Typography color="textSecondary" gutterBottom><h5>React</h5></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.iconContainer}><i class="fab fa-node fa-5x"></i></div>
                        <Typography color="textSecondary" gutterBottom><h5>Node</h5></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.iconContainer}><i class="fas fa-database fa-5x"></i></div>
                        <Typography color="textSecondary" gutterBottom><h5>databases</h5></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.iconContainer}><i class="fab fa-git-alt fa-5x"></i></div>
                        <Typography color="textSecondary" gutterBottom><h5>version control</h5></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={styles.project}>
                    <CardContent>
                        <div className={styles.iconContainer}><i class="fab fa-python fa-5x"></i></div>
                        <Typography color="textSecondary" gutterBottom><h5>python</h5></Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skills
