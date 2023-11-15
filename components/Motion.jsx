"use client"
import React, { useEffect, useRef, useState } from 'react';

const Motion = ({ children, motion1, motion2 }) => {
    const myRef = useRef();
    const [visible, setVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        }, {
            threshold: 0.1
        })
        observer.observe(myRef.current)
    }, []);

    return (
        <div ref={myRef} className={visible ? motion1 : motion2}>
            {children}
        </div>
    );
};

export default Motion;