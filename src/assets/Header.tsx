import { createElement, type JSX } from "react";
import SpanComponent from "./SpanComp.tsx";
interface HomeProps {
    onNavigate: (page:  'home' | 'analytics' | 'settings') => void;
    onToggleSidebar: () => void;
}
export default function Header({onNavigate, onToggleSidebar}: HomeProps): JSX.Element {
    return (
        createElement('header', { className: 'site-header', id: 'siteHeader' },
            createElement('button', { className: 'menu-btn', id: 'menuBtn', "aria-label": "Toggle navigation menu", "aria-expanded": false, "aria-controls": "sidebar", onClick: onToggleSidebar },
                SpanComponent()
            ),
            createElement('a', { href: '#home', className: 'brand-name' }, 'Iterum Sciences'),
            createElement('button', { className: 'theme-btn', id: 'themeBtn', "aria-label": "Switch to dark mode" },
                createElement('span', { className: 'theme-icon-light', "aria-hidden": true }, '🌙'),
                createElement('span', { className: 'theme-icon-dark', "aria-hidden": true }, '☀️')
            ),
            createElement('button', { className: 'btn btn-login', onClick: () => {
                onNavigate("settings");
            } }, 'Login')
        )
    )
}