import { createElement, type JSX } from "react";
export default function MobileOverlay(): JSX.Element {
    return (
        createElement('div', { className: 'sidebar-overlay', id: 'sidebarOverlay' }, '')
    )
}