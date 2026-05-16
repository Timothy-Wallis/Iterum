import { createElement, type JSX } from "react";
export default function Footer(): JSX.Element {
    return (
        createElement('footer', {className: 'footer'}, 
            createElement('div', {className: 'container'}, 
                createElement('p', null, '© 2024 Iterum Sciences. All rights reserved.'),
                createElement('p', null, 'Biological tools for Teaching and Research'),
                createElement('p', null, 'For issues or inquiries, contact us at:', createElement('a', {href: 'mailto:timothywallis@ucmerced.edu'}, 'timothywallis@ucmerced.edu'))
            ),
        )
    )
}