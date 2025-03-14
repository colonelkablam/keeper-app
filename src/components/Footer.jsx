import React from "react";

export default function() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>© {year} Nick Harding. All rights reserved.</p>
        </footer>
    );
}