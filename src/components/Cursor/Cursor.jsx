import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    useEffect(() => {
        const interactiveElements = document.querySelectorAll("a, button, .hover-target");

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", () => setIsHovering(true));
            el.addEventListener("mouseleave", () => setIsHovering(false));
        });

        return () => {
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", () => setIsHovering(true));
                el.removeEventListener("mouseleave", () => setIsHovering(false));
            });
        };
    }, []);

    return (
        <div
            className={`cursor ${isHovering ? "cursor-hover" : ""}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default Cursor;
