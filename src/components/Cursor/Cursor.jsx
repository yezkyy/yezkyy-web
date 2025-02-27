import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    useEffect(() => {
        const smoothTrail = setInterval(() => {
            setTrailingPosition((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.2,
                y: prev.y + (position.y - prev.y) * 0.2,
            }));
        }, 10);

        return () => clearInterval(smoothTrail);
    }, [position]);

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

    useEffect(() => {
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <>
            <div
                className={`cursor cursor-main ${isHovering ? "cursor-hover" : ""} ${isClicking ? "cursor-click" : ""}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className="cursor cursor-trail"
                style={{ left: `${trailingPosition.x}px`, top: `${trailingPosition.y}px` }}
            />
        </>
    );
};

export default Cursor;