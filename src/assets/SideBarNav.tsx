import { createElement, type JSX } from "react";
export default function SideBarNav(): JSX.Element {
    return (
        createElement('nav', { className: 'sidebar', id: 'sidebar' },
            createElement('ul', { className: 'nav-links' },
                createElement('li', null, createElement('a', { href: '#home' }, 'Home')),
                createElement('li', null, createElement('a', { href: '#about' }, 'About')),
                createElement('li', null, createElement('a', { href: '#tools' }, 'Our Tools')),
                createElement('li', null, createElement('a', { href: '#research' }, 'Research'))
            )
        )
    )
}