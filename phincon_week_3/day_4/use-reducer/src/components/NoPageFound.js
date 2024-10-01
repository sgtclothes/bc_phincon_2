import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.message}>Oops! The page you are looking for doesn't exist.</p>
            <Link to="/" style={styles.link}>
                Go to Home
            </Link>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
    },
    title: {
        fontSize: "4rem",
        marginBottom: "1rem",
    },
    message: {
        fontSize: "1.5rem",
        marginBottom: "2rem",
    },
    link: {
        textDecoration: "none",
        color: "#007bff",
        fontSize: "1.2rem",
    },
};

export default NoPageFound;
