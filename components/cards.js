import React from 'react';
import styles from "@/styles/card.module.css";
import Link from 'next/link';

const ProjectCard = ({ tittle, description, imageURL, urlProject }) => {
    return (
        <div className={styles.projectcard}>
            <img src={imageURL} alt={tittle} className={styles.projectimage} />
            <div className={styles.projectcontent}>
                <h3>{tittle}</h3>
                <p>{description}</p>
                <Link id={styles.link} href={urlProject}>
                    See code
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;