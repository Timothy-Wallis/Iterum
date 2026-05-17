import { createElement, type JSX } from "react";
export default function SideBarNav({open, onLinkClick}: {open: boolean, onLinkClick: () => void}): JSX.Element {
    const handleLinkClick = (href: string) => (e: any) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (window.innerWidth <= 768) {
            onLinkClick();
        }
    };

    return (
        createElement('nav', { className: `sidebar ${open ? 'mobile-open' : ''}`, id: 'sidebar' },
            createElement('ul', { className: 'nav-links' },
                createElement('li', null, createElement('a', { href: '#home', onClick: handleLinkClick('#home') }, 'Home')),
                createElement('li', null, createElement('a', { href: '#about', onClick: handleLinkClick('#about') }, 'About')),
                createElement('li', null, createElement('a', { href: '#tools', onClick: handleLinkClick('#tools') }, 'Our Tools')),
                createElement('li', null, createElement('a', { href: '#research', onClick: handleLinkClick('#research') }, 'Research'))
            )
        )
    )
}