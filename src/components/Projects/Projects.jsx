import React from "react";
import styles from "./Projects.module.css";

function Projects() {
    return (
        <div id="projects" className={styles.container}>
            <div className={styles.parent}>
                <h1 className={styles.heading}>Projects</h1>
                <div className={styles.project}>
                    <div className={styles.projectHeading}>Covid-19 API based application</div>
                    <div className={styles.projectDescription}>An application using HTML, CSS, Javascript and ReactJS</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;