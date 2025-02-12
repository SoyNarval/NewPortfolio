import React, { useEffect } from 'react';

const StarrySky = ({ isDarkMode }) => {

    const createStar = () => {
        const star = document.createElement('div');
        star.classList.add('star');
        
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.width = Math.random() * 5 + 'px';
        star.style.height = Math.random() * 5 + 'px';

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 6000);
    };

    useEffect(() => {
        const interval = setInterval(createStar, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const removeAllStars = () => {
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => star.remove());
        };
    
        removeAllStars();
    
        const interval = setInterval(createStar, 1000);
        return () => clearInterval(interval);
    }, [isDarkMode]);

    return null; 
};

export default StarrySky;