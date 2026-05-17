import { createElement, type JSX, useState, useEffect } from "react";
export default function MobileOverlay({open, onClose}: {open: boolean, onClose: () => void}): JSX.Element {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isMobile) return createElement('div');

    return (
        createElement('div', { className: `sidebar-overlay ${open ? 'active' : ''}`, id: 'sidebarOverlay', onClick: onClose }, '')
    )
}