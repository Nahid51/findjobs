"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const LazyImage = ({ url, x, y, text }) => {
    const ref = useRef();
    const [inView, setInView] = useState(false);

    let callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        });
    };

    let options = {
        rootMargin: "-100px",
        threshold: 1.0,
    };

    useEffect(() => {
        let observer = new IntersectionObserver(callback, options);
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        }

    }, []);

    return inView ? <Image src={url} alt={text} width={x} height={y} /> : <div ref={ref}></div>;
};

export default LazyImage;