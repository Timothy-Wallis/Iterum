import { createElement, type JSX } from "react";
import SpanComponent from "./SpanComp.tsx";
export default function Header(): JSX.Element {
    return (
        createElement('header', { className: 'site-header', id: 'siteHeader' },
            createElement('button', { className: 'menu-btn', id: 'menuBtn', "aria-label": "Toggle navigation menu", "aria-expanded": false, "aria-controls": "sidebar" },
                SpanComponent()
            ),
            createElement('a', { href: '#home', className: 'brand-name' }, 'Iterum Sciences'),
            createElement('button', { className: 'theme-btn', id: 'themeBtn', "aria-label": "Switch to dark mode" },
                createElement('span', { className: 'theme-icon-light', "aria-hidden": true }, '🌙'),
                createElement('span', { className: 'theme-icon-dark', "aria-hidden": true }, '☀️')
            ),
            createElement('a', { href: 'account.html', className: 'btn btn-login' }, 'Login')
        )
    )
}