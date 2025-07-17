import { useRef, useEffect } from 'react';

export const useResizable = ({ minWidth = 300, maxWidth = 900 } = {}) => {
    const ref = useRef(null);
    const formRef = useRef(null);


const startResize = (e) => {
    const element = ref.current;
    const startX = e.clientX;
    const startWidth = element.offsetWidth;

    const onMouseMove = (e) => {
    const newWidth = Math.min(Math.max(startWidth + (e.clientX - startX), minWidth), maxWidth);
    element.style.width = `${newWidth}px`;
    };

    const stopResize = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', stopResize);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopResize);
};

return { ref, startResize,formRef };
};
